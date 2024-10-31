import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoqOYnAsXdTWOI2-forQVJLHTRt53vY8g",
    authDomain: "langara-f48d2.firebaseapp.com",
    projectId: "langara-f48d2",
    storageBucket: "langara-f48d2.appspot.com",
    messagingSenderId: "634131170674",
    appId: "1:634131170674:web:a2c8aff13912bf2fd089eb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const MovieFetcher = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieCollectionRef = collection(db, 'taskCollection'); // Use a descriptive name
        const movieDocs = await getDocs(movieCollectionRef);
        
        const movies = movieDocs.docs.map(doc => ({
          id: doc.id,
          ...doc.data() 
        }));

        setMovieData(movies);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchMovieData();
  }, []); 

  return (
    <div>
      <h1>Movies</h1>
      {isLoading ? (
        <p>Loading movies...</p>
      ) : (
        <ul>
          {movieData.length > 0 ? (
            movieData.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.movie_title}</h2>
                <p>Genres: {movie.movie_genres}</p>
                <p>Release Date: {movie.movie_release_date}</p>
                {movie.movie_poster_url && (
                  <img src={movie.movie_poster_url} alt={movie.movie_title} style={{ width: '150px' }} />
                )}
              </li>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default MovieFetcher;
