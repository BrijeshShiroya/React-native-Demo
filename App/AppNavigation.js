import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Login from './Modules/Auth/Login';
import Home from './Modules/HomeDashboard/Home';
import Videos from './Modules/HomeDashboard/Videos';
import Setting from './Modules/HomeDashboard/Setting';

const Tab = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Videos: { screen: Videos },
    Setting: { screen: Setting }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
const Root = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Dashboard: Tab
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

export default createAppContainer(Root);
