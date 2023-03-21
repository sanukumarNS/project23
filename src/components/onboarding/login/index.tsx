import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import useOnFocus from '../../../hooks/useOnFocus';
import ActionBtn from './components/ActionBtn';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(10);
  const pass_ref = useRef();
  const pass5_ref = useRef();


  const goToSignup = () => {
    setCount(count + 10);
    navigation.navigate('SignUp', {username: 'Tuesday evening'});
  };

  const saveEmail = async () => {
    await AsyncStorage.setItem('email', email);
    Alert.alert('Email saved');
    // ToastAndroid.show('Email saved', ToastAndroid.SHORT);
  };
  const showEmail = async () => {
    const asyncEmail = await AsyncStorage.getItem('email');
    if (asyncEmail) {
      setEmail(asyncEmail);
    }
  };

  useOnFocus(() => {
    console.warn('Focus running');
  });

  return (
    <View>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Enter email"
        value={email}
        autoFocus={true}
        returnKeyType={'next'}
        onSubmitEditing={() => pass_ref.current.focus()}
        keyboardType={'email-address'}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        secureTextEntry
        returnKeyType={'done'}
        ref={pass_ref}
        onSubmitEditing={() => Alert.alert('Hello')}
        keyboardType={'default'}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Enter confirm Password"
        value={password}
        secureTextEntry
        returnKeyType={'done'}
        ref={pass5_ref}
        onSubmitEditing={() => Alert.alert('Hello')}
        keyboardType={'default'}
        onChangeText={setPassword}
      />

      <ActionBtn
        onPress={saveEmail}
        btnLabel={'Save Email hhhh'}
        btnBGColor={'lightgreen'}
      />
      <ActionBtn onPress={showEmail} btnLabel={count} btnBGColor={'green'} />
      <ActionBtn
        onPress={goToSignup}
        btnLabel={'Go To Signup'}
        btnBGColor={'pink'}
      />
    </View>
  );
};

export default Login;
