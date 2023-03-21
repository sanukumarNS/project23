import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import routes from '../../../assets/routes';

const SignUp = ({route}) => {
  console.log('get value from route', route);
  const {dispatch} = useNavigation();
  const goToDashboard = async () => {
    await AsyncStorage.setItem('access_token', '123');
    return dispatch(
      CommonActions.reset({index: 0, routes: [{name: routes.dashboard.path}]}),
    );
  };

  return (
    <View>
      <Text>Signup Page</Text>
      <Pressable onPress={goToDashboard}>
        <Text style={{fontSize: 50}}>{route.params.username}</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
