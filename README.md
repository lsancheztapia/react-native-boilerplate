
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
npm install react-native-router-flux --save
npm install redux  --save
npm install react-redux --save
npm install redux-thunk --save
```

finally edit index.js and put this code:
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
### versions tested:
```bash
react-native  0.61.5
react-native-router-flux  ^4.0.6
redux  ^4.0.4
react-redux  ^7.1.3
redux-thunk  ^2.3.0
```

