# react-native-boilerplate
The React Native, Redux basic boilerplate 

## Installation:
react-native init <MyProject>
cd <MyProject>
git clone https://github.com/lsancheztapia/react-native-boilerplate.git
cd react-native-boilerplate
rm -rf .git
mv * ../
cd ../
npm install --save react-native-router-flux@3.40.1 react-redux redux redux-thunk

finally edit index.android.js and index.ios.js and put this code:
import {
  AppRegistry
} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('<MyProject>', () => App);

## Running - an emulator needs to be runnign first
react-native start
react-native run-android


