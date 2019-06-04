import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Login from './Modules/Auth/Login';
import Home from './Modules/HomeDashboard/Home';
import Videos from './Modules/HomeDashboard/Videos';
import Setting from './Modules/HomeDashboard/Setting';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from './Themes';

const TabIcon = props => (
  <Icon name={props.name} size={20} color={Colors.primary} />
);

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarIcon: <TabIcon name={'home'} />
      }
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarIcon: <TabIcon name={'list'} />
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarIcon: <TabIcon name={'cog'} />
      }
    }
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
