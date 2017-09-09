import {
  TEST_ITEMS_LOADED
} from '../actions/types'

const INITIAL_STATE = {
  items : [{title: 'yet'}, {title: 'yet2'}]
}

export default (state = INITIAL_STATE, action) => {
//console.log( action, 'in TestingListingReducer')
  switch(action.type){
    case TEST_ITEMS_LOADED:
      return {...state, items: action.payload }
    default:
      return state
  }
}