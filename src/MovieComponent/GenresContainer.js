import React, { useEffect, useState } from "react";

export default function GenresContainer({ GenerData }) {
  let idArray;

  const [movie, setMovie] = useState();

  const fetchGenres = async () => {
    try {
      const response = await fetch("/movieGenre");
      const data = await response.json();
      const genresString = data.genres;

      let object1 = {};

      genresString.map((i) => {
        object1[i.name] = {
          name: i.name,
          id: i.id,
        };
      });

      idArray = GenerData.map((i) => (i = object1[i]));

      fetchList();
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  };
  const fetchMovie = async (id) => {
    const response = await fetch(`/movieList?with_genres=` + `${id.id}`);

    const data = await response.json();

    return data;
  };

  const fetchList = async () => {
    try {
      const promises = idArray.map((id) => {
        return (async () => {
          let response = await fetchMovie(id);
          return {
            id: id.id,
            name: id.name,
            response: response.results,
          };
        })();
      });

      const movies = await Promise.all(promises);
      setMovie(movies);
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="Movie">
      <h3 className="HeadingChoice">Entertainment according to your choice</h3>
      <div className="MovieListContainer">
        {movie &&
          movie.map((genre) => (
            <div className="MovieContainer ">
              <h2 className="MovieListHeading">{genre.name}</h2>
              <div className="MovieCardContainer ScrollBarMovies">
                {genre?.response.map((i) => {
                  return (
                    <img
                      className="cardDisplay"
                      src={"https://image.tmdb.org/t/p/w500" + i.poster_path}
                    />
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
