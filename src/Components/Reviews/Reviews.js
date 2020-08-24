import React, { Component } from "react";
import Api from "../../Helpers/Api";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    Api.movieReview(this.props.match.params.movieId).then((res) =>
      this.setState({ reviews: res })
    );
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={styles.ReviewsWrapper}>
        {reviews.length > 0 ? (
          <ul className={styles.ReviewsList}>
            {reviews.map((review) => (
              <li key={review.id} className="ReviewsItem">
                <h3 className={styles.ReviewsTitle}>Author: {review.author}</h3>
                <p className={styles.ReviewsDesc}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default Reviews;
