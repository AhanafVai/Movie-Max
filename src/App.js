import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Container style={{ paddingTop: "5rem" }}>
        <Switch>
          <Route exact path="/" component={Trending} />
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
