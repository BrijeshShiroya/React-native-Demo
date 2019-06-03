import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Modules/Auth/Login';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Login: { screen: Login }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

export default createAppContainer(PrimaryNav);
