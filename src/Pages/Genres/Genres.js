import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
  selectedGenres,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=aa22a4fda6a7c8fc7e647c307d35b25d&language=en-US`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenre();
    setGenres("");
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            clickable
            size="small"
            color="primary"
            className="p-1 m-1"
            key={genre.id}
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            clickable
            size="small"
            className="p-1 m-1"
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
