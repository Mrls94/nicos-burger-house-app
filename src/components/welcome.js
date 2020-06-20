import React from 'react'
import { menu } from '../constants/menu'
import MenuItem from './menu/menu_item'
import { Grid } from '@material-ui/core'

function Welcome(props) {
  return (
    <div>
      <Grid
         container
         direction="column"
         justify="center"
         alignItems="stretch"
         spacing={3}
       >
        <Grid item>
          <h1>Hello, {props.name}</h1>
        </Grid>
        { menu.map( item => (<MenuItem key={item.name} item={item}></MenuItem>) )}
      </Grid>
    </div>
  ) 
}

export default Welcome;