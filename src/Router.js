import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TestListing from './components/TestListing';
/*
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
*/
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ }} >

      <Stack key="root" hideNavBar>

        <Scene key="login" component={LoginForm} />
        <Scene key="testListing" component={TestListing} />


      </Stack>

    </Router>
  );
};

export default RouterComponent;
