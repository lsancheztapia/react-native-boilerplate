import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fieldUpdate, validateLogin  } from '../actions'
//import { CardSection, Button, Spinner } from './common';


class LoginForm extends Component {
/*
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
console.log('onButtonPress()')
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
*/

  onButtonPress(){
    const { email, password } = this.props;
    this.props.validateLogin( { email, password } )
  }

  render() {

    return (
      <View>
        <Text>Login</Text>
        <TextInput 
          placeholder='Email'
          value={this.props.email}
          onChangeText={value => this.props.fieldUpdate({ prop: 'email', value })}
        />
        <TextInput 
          placeholder='Pasword'
          value={this.props.password}
          onChangeText={value => this.props.fieldUpdate({ prop: 'password', value })}
        />
        <TouchableOpacity onPress={this.onButtonPress.bind( this )}>
          <Text>Ingresar</Text>
        </TouchableOpacity>

      </View>

    );
  }
}



const mapStateToProps = ( state ) => {

  const { email, password } = state.loginForm;

  return  { email, password } ;
};

export default connect(mapStateToProps, {
  fieldUpdate, validateLogin
})(LoginForm);

