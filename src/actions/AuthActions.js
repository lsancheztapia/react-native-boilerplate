import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

import { Keyboard } from 'react-native'
import dismissKeyboard from 'react-native-dismiss-keyboard'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {

console.log( 'loginUser()' )

  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    if ( email == 'u' && password == 'p' ) {
      loginUserSuccess( dispatch, {u:'luis', uid: '1'} )
    } else {
      loginUserFail( dispatch )
    }

  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

dismissKeyboard()
/*
  Keyboard.dismiss
console.log( Keyboard, '======================>' )
*/
  Actions.main()
};
