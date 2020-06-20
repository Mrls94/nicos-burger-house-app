import React from 'react'
import { menu } from '../constants/menu'
import MenuItem from './menu/menu_item'

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      { menu.map( item => (<MenuItem item={item}></MenuItem>) )}
    </div>
  ) 
}

export default Welcome;