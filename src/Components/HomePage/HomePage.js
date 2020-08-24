import React, { Component } from "react";
import styles from "./HomePage.module.css";
import Api from "../../Helpers/Api";
import { NavLink } from "react-router-dom";

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    Api.trendingUrl().then((res) => {
      this.setState({ films: [...res] });
    });
  }

  render() {
    return (
      <ul className={styles.films}>
        {this.state.films.length > 0 &&
          this.state.films.map((item) => (
            <li className={styles.film} key={item.id}>
              <NavLink
                className={styles.film}
                exact
                to={{
                  pathname: `movies/${item.id}`,
                  state: { from: this.props.location },
                }}
              >
                {item.name || item.original_title}
              </NavLink>
            </li>
          ))}
      </ul>
    );
  }
}

export default HomePage;
