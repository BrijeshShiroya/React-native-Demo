import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import AuthActions from '../../../Redux/AuthRedux';
import { emailVarification } from '../../../Services/UtilityFunctions';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
      loading: false
    };
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/prop-types
    if (!prevProps.error && this.props.error) {
      // eslint-disable-next-line react/prop-types
      alert(this.props.error);
      // eslint-disable-next-line react/prop-types
    } else if (this.props.user !== prevProps.user) {
      this.props.navigation.navigate('Dashboard');
    }
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
    // eslint-disable-next-line complexity
    ['email', 'password'].forEach(name => {
      let value = this[name].value();
      if (!value) {
        errors[name] = 'Should not be empty';
      } else if ('email' === name && !emailVarification(value)) {
        errors[name] = 'Invalid email';
      } else {
        if ('password' === name && value.length < 6) {
          errors[name] = 'Too short';
        }
      }
    });
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      // eslint-disable-next-line react/prop-types
      this.props.attemptLogin(this.state.email, this.state.password);
    }
  }

  render() {
    let { email, password, errors = {} } = this.state;

    return (
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.mainContainerStyle}
      >
        <View style={styles.containerStyle}>
          <Text style={styles.loginTextStyle}>Login</Text>
          <TextField
            containerStyle={styles.textFieldStyle}
            ref={ref => (this.email = ref)}
            label="Email"
            value={email}
            error={errors.email}
            onFocus={() => this.onFocus()}
            onSubmitEditing={() => this.onSubmitEmail()}
            onChangeText={email => this.setState({ email })}
          />
          <TextField
            secureTextEntry
            containerStyle={styles.textFieldStyle}
            ref={ref => (this.password = ref)}
            label="Password"
            value={password}
            error={errors.password}
            onFocus={() => this.onFocus()}
            onSubmitEditing={() => this.onSubmitPassword()}
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
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.auth.fetching,
  user: state.auth.user,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  attemptLogin: (email, password) =>
    dispatch(AuthActions.loginRequest(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
