import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    return(
        <div>    
            {props.Images.map((image) => {
                return <ImageCard className='image-list' key={image.id}  Images = {image} />
            })}
        </div> 
    )
}

export default ImageList;