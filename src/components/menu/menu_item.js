import React, { useState, useEffect } from 'react'
import { storage } from '../../constants/firebase'
import { Grid, Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core'
import './menu.scss'

function MenuItem(props) {
  const [imageUrl, setImageUrl] = useState('https://image.shutterstock.com/image-vector/burger-hamburger-logo-icon-design-260nw-1445463893.jpg')

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
  <Grid item>
    <Card>
      <CardActionArea>
        <CardMedia
          className="menu_item"
          image={imageUrl}
        />
        <CardContent>
          <h1>{props.item.name}</h1>
          <p>{props.item.description}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  )
}

export default MenuItem