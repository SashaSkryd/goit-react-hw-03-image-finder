import React from "react";
import PropTypes from "prop-types";
import style from "../App/App.module.css"

export default function ShowMore ({ text, fetchPosts }) {
  return (
      <div className={style.containerButton}>
        <button className={style.Button} onClick={fetchPosts}>
          {text}
        </button>
      </div>
  );
};

ShowMore.defaultProps = {
  text: "ShowMore...",
};

ShowMore.propTypes = {
  text: PropTypes.string,
  fetchPosts: PropTypes.func.isRequired,
};