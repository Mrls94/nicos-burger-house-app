import React, { useState, useEffect } from 'react'
import { storage } from '../../constants/firebase'


function MenuItem(props) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(
    () => {
      storage.child(props.item.image_url).getDownloadURL().then((url) => {
        setImageUrl(url)
      }).catch((error) => {
        // Handle any errors
      }) 
    }, []
  )

  return (
  <div>
    <h1>{props.item.name}</h1>
    <p>{props.item.description}</p>
    <img src={imageUrl}></img>
  </div>
  )
}

export default MenuItem