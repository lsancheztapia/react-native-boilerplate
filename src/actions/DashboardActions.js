/**
 * Example of action creators 
 */
//import firebase from 'firebase';
import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ITEMS_FETCH_DATA_SUCCESS
} from './types';

/*
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
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    loginUserSuccess(dispatch, { email, password } );
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

  Actions.main();
};
*/


export function itemsFetchData( url ) {
  return (dispatch) => {
    fetch(url)
    .then((response) => response.json())
    .then( (items) =>{
      dispatch({
        type: ITEMS_FETCH_DATA_SUCCESS,
        payload: items
      })
    })
    .catch((error) => {
      console.error(error);
    });

  };
}