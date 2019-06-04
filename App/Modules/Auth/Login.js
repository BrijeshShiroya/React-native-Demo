import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { TextField } from 'react-native-material-textfield';
import styles from './Styles/LoginStyles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onFocus = this.onFocus.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);

    this.emailRef = this.updateRef.bind(this, 'email');
    this.passwordRef = this.updateRef.bind(this, 'password');
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }
  }

  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }

  onSubmit() {
    let errors = {};
    ['email', 'password'].forEach(name => {
      let value = this[name].value();
      if (!value) {
        errors[name] = 'Should not be empty';
      } else {
        if ('password' === name && value.length < 6) {
          errors[name] = 'Too short';
        }
      }
    });

    this.setState({ errors });
  }

  render() {
    let { email, password, errors = {} } = this.state;

    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.mainContainer}>
          <TextField
            ref={this.emailRef}
            label="Email"
            value={email}
            error={errors.email}
            onFocus={this.onFocus}
            onSubmitEditing={this.onSubmitEmail}
            onChangeText={email => this.setState({ email })}
          />
          <TextField
            secureTextEntry
            ref={this.passwordRef}
            label="Password"
            value={password}
            error={errors.password}
            onFocus={this.onFocus}
            onSubmitEditing={this.onSubmitPassword}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            primary
            style={styles.buttonStyle}
            onPress={() => this.onSubmit()}
          >
            <Text style={styles.buttomTextStyle}>Login</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default connect(
  null,
  null
)(Login);
