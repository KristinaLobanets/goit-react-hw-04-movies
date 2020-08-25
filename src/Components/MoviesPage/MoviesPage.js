import React, { Component } from "react";
import Api from "../../Helpers/Api";
import styles from "./MoviesPage.module.css";
import SearchForm from "../SearchForm/SearchForm";
import QueryString from "query-string";
import { NavLink } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = QueryString.parse(prevProps.location.search);
    const { query } = QueryString.parse(this.props.location.search);
    if (prevQuery !== query) {
      Api.movieFinderUrl(query).then((res) =>
        this.setState({ movies: [...res] })
      );
    }
  }

  changeSearch = (search) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${search}`,
    });
  };

  componentDidMount() {
    const { query } = QueryString.parse(this.props.location.search);
    if (query) {
      Api.movieFinderUrl(query).then((res) =>
        this.setState({ movies: [...res] })
      );
    }
  }

  render() {
    return (
      <>
        <SearchForm onSubmit={this.changeSearch}></SearchForm>
        {this.state.movies.length > 0 && (
          <ul className={styles.films}>
            {this.state.movies.map((item) => (
              <li className={styles.film_li} key={item.id}>
                <NavLink
                  className={styles.film}
                  to={{
                    pathname: `movies/${item.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
