import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import { Login, Home, Videos, Setting } from 'Modules';
// import Login from './Modules/Auth/Login';
// import Home from './Modules/HomeDashboard/Home';
// import Videos from './Modules/HomeDashboard/Videos';
// import Setting from './Modules/HomeDashboard/Setting';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../Themes';

function renderTabIcon(name) {
  return <Icon name={name} size={20} color={Colors.primary} />;
}

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarIcon: renderTabIcon('home')
      }
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarIcon: renderTabIcon('list')
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        gesturesEnabled: false,
        tabBarIcon: renderTabIcon('cog')
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
