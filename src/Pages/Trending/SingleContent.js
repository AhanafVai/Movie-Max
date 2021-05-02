import { Badge } from "@material-ui/core";
import React from "react";

import { img_300 } from "../config";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div
        className="card  rounded mb-4 p-2"
        style={{ width: "18rem", color: "white", backgroundColor: "#1f2e47" }}
      >
        <Badge
          badgeContent={vote_average}
          color={vote_average > 7 ? "primary" : "secondary"}
        />

        <img src={`${img_300}/${poster}`} class="card-img-top" alt={title} />

        <div className="card-body">
          <p className="text-center">
            <b>{title}</b>
          </p>

          <div className="d-flex justify-content-around">
            <p className="card-text"> {media_type}</p>
            <p className="card-text">Release: {date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
