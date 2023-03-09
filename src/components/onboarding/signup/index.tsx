import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import routes from '../../../assets/routes';

const SignUp = () => {
  const {navigate} = useNavigation();
  const goToDashboard = () => {
    return navigate(routes.dashboard.path);
  };
  return (
    <View>
      <Text>Signup Page</Text>
      <Pressable onPress={goToDashboard}>
        <Text>Go to Dashboard</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
