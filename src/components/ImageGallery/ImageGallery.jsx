import React from "react"
import style from "../App/App.module.css"

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx'

export default function ImageGallery({ data }) {
    
    return (<ul className={style.ImageGallery}>
         {data.map((item) => { 
              return (<ImageGalleryItem key={item.id} item={item}/>  ) 
            })}
            </ul>
        )
};
