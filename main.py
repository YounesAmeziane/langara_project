import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

api_key = '2032f4376f7be7826a5c03ecf5ea3933'
base_url = 'https://api.themoviedb.org/3'

movie_title = 'Inception'
search_url = f"{base_url}/search/movie"

response = requests.get(search_url, params={'api_key': api_key, 'query': movie_title})

if response.status_code == 200:
    data = response.json()  

    if data['results']:
        movie = data['results'][0]  
        title = movie.get('title')
        release_date = movie.get('release_date')  
        
        poster_path = movie.get('poster_path')
        poster_url = f"https://image.tmdb.org/t/p/w500{poster_path}" if poster_path else "No image available"

        movie_id = movie['id']
        details_url = f"{base_url}/movie/{movie_id}"
        details_response = requests.get(details_url, params={'api_key': api_key})
        
        if details_response.status_code == 200:
            details_data = details_response.json()
            genres = [genre['name'] for genre in details_data.get('genres', [])]
            
            movie_title = title
            movie_genres = ', '.join(genres)
            movie_poster_url = poster_url
            movie_release_date = release_date

            data = {
                'movie_title': movie_title,
                'movie_genres': movie_genres,
                'movie_poster_url': movie_poster_url,
                'movie_release_date': movie_release_date
            }

            doc_ref = db.collection('taskCollection').document()
            doc_ref.set(data)

            print('Document ID:', doc_ref.id)
        else:
            print("Error fetching movie details:", details_response.status_code, details_response.text)
    else:
        print("No movie found with that title.")
else:
    print("Error:", response.status_code, response.text)
