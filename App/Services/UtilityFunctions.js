import { Alert } from 'react-native';

export const emailVarification = email => {
  // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  // eslint-disable-next-line  no-useless-escape
  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (reg.test(email) === false) {
    return false;
  }
  return true;
};

export const showAlert = message => {
  Alert.alert(
    'Simform',
    message,
    // eslint-disable-next-line no-restricted-syntax
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false }
  );
};

export const showConfirmationAlert = (
  message,
  okTitle,
  CancelTitle,
  OkPress
) => {
  Alert.alert(
    'Simform',
    message,
    [
      { text: CancelTitle, onPress: () => {} },
      { text: okTitle, onPress: OkPress }
    ],
    { cancelable: false }
  );
};
