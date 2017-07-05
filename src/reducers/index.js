/**
 *  Just reducers do changes in main STATE
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DashboardReducer from './DashboardReducer';
//import EmployeeFormReducer from './EmployeeFormReducer';
//import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer
//  employeeForm: EmployeeFormReducer,
//  employees: EmployeeReducer
});
