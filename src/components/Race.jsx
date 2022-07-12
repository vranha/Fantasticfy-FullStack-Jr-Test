import React, { useEffect, useState } from 'react'
import axios from 'axios'
import placeholder from '../assets/placeholder.png'
import "./Race.scss";

function Race({ race, setIsLoading, setBigImage, setIsClicked }) {
 
    const [images, setImages] = useState('');


    useEffect(() => {
        getImages()

    }, []);


    const selectImage = (e) => {
        setBigImage(e.target.src)
        setIsClicked(true)
    }

    const getImages = async () => {
        // setIsLoading(true)
        const response = await axios.get(`https://dog.ceo/api/breed/${race}/images`)
         setImages(response.data.message)
        setIsLoading(false)
    }

  return (
    <div className={race}>
  <h3>{race}</h3>
  <div className="image__container">
    {images ? images.filter((item, i) => i < 3).map(image => ( 
    <img key={image} src={image} alt="dog" onClick={(image) => selectImage(image)}/>
    )) 
    : 
    <>
    <img src={placeholder} alt="dog" />
    <img src={placeholder} alt="dog" />
    <img src={placeholder} alt="dog" />
    </>
    }
  </div>

</div>
  )
}

export default Race