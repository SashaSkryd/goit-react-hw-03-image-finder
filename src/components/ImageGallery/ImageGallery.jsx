import React from "react"
import style from "../App/App.module.css"
import PropTypes from "prop-types"

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx"

export default function ImageGallery({ data, getLargeImage }) {
  return (
    <ul className={style.ImageGallery}>
      {data.map((item) => {
        return <ImageGalleryItem key={item.id} item={item} getLargeImage={getLargeImage} />
      })}
    </ul>
  )
}

ImageGalleryItem.defaultProps = {
  data: [],
}

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
}
