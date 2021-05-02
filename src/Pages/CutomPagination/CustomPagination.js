import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  const classes = useStyles();

  return (
    <div
      style={{
        marginBottom: "5rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      className={classes.root}
    >
      <Pagination
        count={numberOfPages}
        variant="outlined"
        onChange={(e) => handlePageChange(e.target.textContent)}
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;
