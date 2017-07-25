# react-native-boilerplate
The React Native, Redux basic boilerplate 

## Installation:
```bash
react-native init <MyProject>
cd <MyProject>
git clone https://github.com/lsancheztapia/react-native-boilerplate.git
cd react-native-boilerplate
rm -rf .git
mv * ../
cd ../
npm install react-native-router-flux@3.35.0 --save
npm install redux@3.6.0  --save
npm install react-redux@4.4.5 --save
npm install redux-thunk@2.1.0 --save
//npm install --save react-native-router-flux@3.40.1 react-redux redux redux-thunk
```

finally edit index.android.js and index.ios.js and put this code:
```javascript
import {
  AppRegistry
} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('<MyProject>', () => App);
```

## Running - an emulator needs to be runnign first
```bash
react-native start
react-native run-android
```


