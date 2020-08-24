import React, { Component } from "react";
import Api from "../../Helpers/Api";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    search: "",
  };

  componentDidMount() {}

  inputHandler() {
    console.log("aaa");
  }

  submitHandler() {
    console.log("submitHandler");
  }

  render() {
    const { movies, search } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.submitHandler}>
          <input
            className={styles.input}
            type="text"
            name="search"
            value={search}
            onChange={this.inputHandler}
          ></input>
          <button className={styles.button}>Search</button>
        </form>
      </div>
    );
  }
}

export default MoviesPage;
