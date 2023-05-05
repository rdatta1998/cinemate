import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const {
    poster_path,
   
    title,
    overview,
    vote_average,
    vote_count,
    runtime,
    budget,
    release_date,
    revenue,
    imdb_id,
  } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;


    useEffect(()=>{
      document.title=`${title}`
    })



  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=d5c647eb049da39d44f5b31a8ef6c073`
      );
      const json = await response.json();
      setMovie(json);
      console.log(json);
    }
    fetchMovie(params.id);
  }, [params.id]);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center  lg:text-left">
            {title}
          </h1>
          <p className="my-4">{overview}</p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="font-bold mr-2">Runtime:</span>
            <span>{runtime}min</span>
          </p>
          <p className="my-4">
            <span className="font-bold mr-2">Budget:</span>
            <span>{budget}</span>
          </p>
          <p className="my-4">
            <span className="font-bold mr-2">Revenue:</span>
            <span>{revenue}</span>
          </p>
          <p className="my-4">
            <span className="font-bold mr-2">Release Date:</span>
            <span>{release_date}</span>
          </p>
          <p className="my-4">
            <span className="font-bold mr-2">IMDB Code:</span>
            <span>
              <a href={`https://www.imdb.com/title/${imdb_id}`}target="_blank" rel="noreferrer">{imdb_id}</a>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};
