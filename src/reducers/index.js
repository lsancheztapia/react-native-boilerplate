import { combineReducers } from 'redux'

import LoginFormReducer from './LoginFormReducer'
import TestListingReducer from './TestListingReducer'

export default combineReducers({
  loginForm: LoginFormReducer,
  testItems: TestListingReducer
});