import React, { Component } from "react";
import styles from "./Cast.module.css";
import Api from "../../Helpers/Api";

export default class Cast extends Component {
  state = {
    cast: null,
    img: "https://image.tmdb.org/t/p/w500",
    imgdefault:
      "http://www.clker.com/cliparts/d/L/P/X/z/i/no-image-icon-md.png",
  };
  componentDidMount() {
    Api.movieActors(this.props.match.params.movieId).then((res) =>
      this.setState({ cast: res })
    );
  }
  render() {
    const { cast, img, imgdefault } = this.state;
    return (
      <>
        {cast && (
          <div className={styles.cast_wrp}>
            <ul className={styles.cast_list}>
              {cast.length > 0 ? (
                cast.map((item) => (
                  <li className={styles.cast_item} key={item.cast_id}>
                    <img
                      className={styles.cast_img}
                      src={
                        item.profile_path ? img + item.profile_path : imgdefault
                      }
                      alt=""
                    />
                    <div>
                      <p className={styles.cast_char}>
                        Character:
                        <span className={styles.cast_info}>
                          {item.character}
                        </span>
                      </p>
                      <p className={styles.cast_name}>
                        Actor:
                        <span className={styles.cast_info}>{item.name}</span>
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <div>There are no reviews on this film</div>
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}
