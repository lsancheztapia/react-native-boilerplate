import { Actions } from 'react-native-router-flux'

import {
  TEST_ITEMS_LOADED
} from './types'

export const fetchItems = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then( (items) =>{
console.log( items )
      dispatch({ type: TEST_ITEMS_LOADED, payload: items })

    }).catch( error => {
      console.error( error )
    })

  }
}