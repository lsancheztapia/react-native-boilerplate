import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
//import EmployeeList from './components/EmployeeList';
//import EmployeeCreate from './components/EmployeeCreate';
//import EmployeeEdit from './components/EmployeeEdit';
import Dashboard from './components/Dashboard';

import { Text } from 'react-native';

const RouterComponent = () => {
  return (

    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene key="dashboard" component={Dashboard} title="Dashboard" />
      </Scene>



    </Router>


  );
};

export default RouterComponent;

/*
      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
*/