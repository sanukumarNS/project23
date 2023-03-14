import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import routes from '../assets/routes';
import Chat from '../components/dashboard/chat';
import Home from '../components/dashboard/home';
import Settings from '../components/dashboard/settings';
import Login from '../components/onboarding/login';
import SignUp from '../components/onboarding/signup';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName={routes.dashboard.chat.path}
      screenOptions={{header: () => null}}>
      <BottomTabs.Screen component={Home} name={routes.dashboard.home.path} />
      <BottomTabs.Screen component={Chat} name={routes.dashboard.chat.path} />
      <BottomTabs.Screen
        component={Settings}
        name={routes.dashboard.settings.path}
      />
    </BottomTabs.Navigator>
  );
};

const AppNavigation = () => {
  const [initialised, setInitialised] = useState(false);
  const [initialRoute, setInitialRoute] = useState(
    routes.onboarding.login.path,
  );
  const getToken = async () => {
    console.log('Calling the get token function');
    const token = await AsyncStorage.getItem('access_token');
    console.log('Token value: ', token);
    if (token && token.length > 0) {
      setInitialRoute(routes.dashboard.path);
    }
    setInitialised(true);
  };
  useEffect(() => {
    if (!initialised) {
      getToken();
    }
  }, []);
  if (!initialised) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{header: () => null}}>
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
