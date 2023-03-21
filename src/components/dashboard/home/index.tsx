import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import routes from '../../../assets/routes';
import styles from '../settings/styles';

const Home = () => {
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  const {dispatch} = useNavigation();
  const logout = async () => {
    await AsyncStorage.setItem('access_token', '');
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {name: routes.onboarding.login.path},
          {name: routes.onboarding.signup.path},
        ],
      }),
    );
  };
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={selectImage} style={styles.selectImageButton}>
        <Text>Select an Image</Text>
      </Pressable>
      <Pressable onPress={logout} style={styles.logoutButton}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
