import React, { Component } from "react";
import styles from "./searchForm.module.css";

class SearchForm extends Component {
  state = {
    search: "",
  };

  inputHandler(e) {
    this.setState({ search: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={(e) => this.submitHandler(e)}>
          <input
            className={styles.input}
            type="text"
            name="search"
            value={search}
            onChange={(e) => this.inputHandler(e)}
          ></input>
          <button className={styles.button}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
