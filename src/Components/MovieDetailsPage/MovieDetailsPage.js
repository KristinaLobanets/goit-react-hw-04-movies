import React, { Component, Suspense, lazy } from "react";
import styles from "./MovieDetailsPage.module.css";
import Api from "../../Helpers/Api";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

const Cast = lazy(() => import("../../Components/Cast/Cast.js"));

const Reviews = lazy(() => import("../../Components/Reviews/Reviews.js"));

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    img: "https://image.tmdb.org/t/p/w500/",
  };

  componentDidMount() {
    Api.movieDetails(this.props.match.params.movieId).then((res) =>
      this.setState({ movie: res })
    );
  }

  // handleGoBack = () => {
  //   if (this.props.location.state && this.props.location.state.from) {
  //     this.props.history.push(this.props.location.state.from);
  //   }
  // };

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    this.props.history.push({
      pathname: "/movies",
      state: location,
    });
  };

  render() {
    const { movie, img } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <button
          className={styles.btn}
          type="button"
          onClick={this.handleGoBack}
        >
          back
        </button>
        {movie && movie.hasOwnProperty("poster_path") && (
          <div className={styles.details}>
            <div className={styles.wrp}>
              <div className={styles.img_wrp}>
                <img
                  className={styles.img}
                  src={img + movie.poster_path}
                  alt=""
                />
              </div>
              <div className={styles.info_wrp}>
                <h2 className={styles.details_name}>
                  {movie.original_name || movie.original_title}(
                  {movie.first_air_date
                    ? movie.first_air_date.slice(0, 4)
                    : movie.release_date.slice(0, 4)}
                  )
                </h2>
                <p className={styles.details_score}>
                  User score: {Math.floor(movie.popularity)}%
                </p>
                <p className={styles.details_overview}>Overview</p>
                <p className={styles.details_overview_des}>{movie.overview}</p>
                <p className={styles.details_gen}>Genres</p>
                <ul className={styles.details_gen_list}>
                  {movie.genres.map((item) => (
                    <li className={styles.details_gen_item} key={item.id}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.details_additional}>
              <h2 className={styles.details_additional_title}>
                Additional information
              </h2>
              <ul className={styles.details_additional_list}>
                <li className={styles.details_additional_list_item}>
                  <NavLink
                    className={styles.additional_link}
                    activeClassName={styles.additional_link_active}
                    exact
                    to={{
                      pathname: `${match.url}/cast`,
                      state: location.state,
                    }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={styles.details_additional_list_item}>
                  <NavLink
                    className={styles.additional_link}
                    activeClassName={styles.additional_link_active}
                    exact
                    to={{
                      pathname: `/movies/${this.props.match.params.movieId}/review`,
                      state: location.state,
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Suspense>
          <Route
            exact
            path={`${this.props.match.path}/cast`}
            component={Cast}
          />
          <Route
            exact
            path={`${this.props.match.path}/review`}
            component={Reviews}
          />
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
