import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Components/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Components/MovieDetailsPage/MovieDetailsPage")
);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/movies" component={MoviesPage} />
              <Route path="/movie/:name" component={MovieDetailsPage} />
              <Redirect to="/" />
            </Switch>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
