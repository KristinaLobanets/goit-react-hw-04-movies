import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";

const HomePage = lazy(() => import("./Components/HomePage/HomePage.js"));

const MoviesPage = lazy(() => import("./Components/MoviesPage/MoviesPage.js"));

const MovieDetailsPage = lazy(() =>
  import("./Components/MovieDetailsPage/MovieDetailsPage.js")
);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
