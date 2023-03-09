import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import routes from '../assets/routes';
import Chat from '../components/dashboard/chat';
import Home from '../components/dashboard/home';
import Settings from '../components/dashboard/settings';
import Login from '../components/onboarding/login';
import SignUp from '../components/onboarding/signup';

const Stack = createStackNavigator();

const DashboardNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={routes.dashboard.settings.path}>
      <Stack.Screen component={Home} name={routes.dashboard.home.path} />
      <Stack.Screen component={Chat} name={routes.dashboard.chat.path} />
      <Stack.Screen
        component={Settings}
        name={routes.dashboard.settings.path}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Login} name={routes.onboarding.login.path} />
        <Stack.Screen component={SignUp} name={routes.onboarding.signup.path} />
        <Stack.Screen
          component={DashboardNavigation}
          name={routes.dashboard.path}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
