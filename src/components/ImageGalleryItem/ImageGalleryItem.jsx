import React from "react"
import style from "../App/App.module.css"

export default function ImageGalleryItem({item}) { 
  console.log(item);
        return (
          <li className={style.ImageGalleryItem} key={item.id}>
            <img src={item.webformatURL} alt="" className={style.ImageGalleryItemImage} data-source={item.largeImageURL}/>
            </li>
        )
}

{/* ImageGalleryItem.defaultProps = {
  data: [],
};

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
    })
  ).isRequired,
} */}