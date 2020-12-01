import React from "react"
import style from "../App/App.module.css"
import PropTypes from "prop-types"

export default function ImageGalleryItem({ item, getLargeImage }) {
  return (
    <li className={style.ImageGalleryItem} key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        className={style.ImageGalleryItemImage}
        onClick={() => getLargeImage(item.largeImageURL)}
      />
    </li>
  )
}

ImageGalleryItem.defaultProps = {
  item: {},
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  getLargeImage: PropTypes.func.isRequired,
}
