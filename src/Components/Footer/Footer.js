import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Movie, Search, Tv, Whatshot } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50px",
    position: "fixed",
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Trending");
  const history = useHistory();

  useEffect(() => {
    if (value === "Trending") {
      history.push("/");
    } else if (value === "Movies") {
      history.push("/movies");
    } else if (value === "Series") {
      history.push("/Series");
    } else if (value === "Search") {
      history.push("/Search");
    }
  }, [value]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Trending"
        value="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction label="Movies" value="Movies" icon={<Movie />} />
      <BottomNavigationAction label="Series" value="Series" icon={<Tv />} />
      <BottomNavigationAction label="Search" value="Search" icon={<Search />} />
    </BottomNavigation>
  );
}
