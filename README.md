
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
npm install react-native-dismiss-keyboard --save
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
### versions tested:
```bash
react-native  0.60.4
react-native-router-flux  ^4.0.6
redux  ^4.0.4
react-redux  ^7.1.0
redux-thunk  ^2.3.0
react-native-dismiss-keyboard ^1.0.0
```

