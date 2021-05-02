import axios from "axios";
import React, { useEffect, useState } from "react";

import CustomPagination from "../CutomPagination/CustomPagination";
import SingleContent from "./SingleContent";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=aa22a4fda6a7c8fc7e647c307d35b25d&page=${page}`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span>Trending</span>

      <div className="row">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
