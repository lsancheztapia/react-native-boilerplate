import { Actions } from 'react-native-router-flux'

import {
  FIELD_VALUE_CHANGED,
  LOGIN_WRONG_USER_PASSWORD
} from './types'

// this functions always return a object or a function

export const fieldUpdate = ({ prop, value }) => {
  // returns an action to reducer
  return {
    type: FIELD_VALUE_CHANGED,
    payload: { prop, value }
  };
}

export const validateLogin = ({ email, password }) => {

  return ( dispatch ) => {
    if ( email == 'u' && password == 'p')  {
      loginSuccess( dispatch )
//     can be added also the user info like :  loginSuccess( dispatch, user )
    } else {
      loginFailed( dispatch )
    }
  }
}

export const loginFailed = (dispatch) => {
  dispatch( { type: LOGIN_WRONG_USER_PASSWORD })
}

export const loginSuccess = (dispatch) => {
  Actions.testListing()
}