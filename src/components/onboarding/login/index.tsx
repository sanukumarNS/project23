import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, TextInput, ToastAndroid, View} from 'react-native';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const goToSignup = () => {
    navigation.navigate('SignUp');
  };

  const saveEmail = async () => {
    await AsyncStorage.setItem('email', email);
    ToastAndroid.show('Email saved', ToastAndroid.SHORT);
  };
  const showEmail = async () => {
    const asyncEmail = await AsyncStorage.getItem('email');
    if (asyncEmail) {
      setEmail(asyncEmail);
    }
  };
  return (
    <View>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <Pressable onPress={saveEmail} style={styles.saveEmailButton}>
        <Text>Save Email</Text>
      </Pressable>
      <Pressable onPress={showEmail} style={styles.showSavedEmailButton}>
        <Text>Show Saved Email</Text>
      </Pressable>
      <Pressable onPress={goToSignup} style={styles.signupButton}>
        <Text style={styles.signupText}>Go To Signup</Text>
      </Pressable>
    </View>
  );
};

export default Login;
