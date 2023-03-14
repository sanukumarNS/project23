import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import ActionBtn from './components/ActionBtn';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const goToSignup = () => {
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
  return (
    <View>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />

      <ActionBtn
        onPress={saveEmail}
        btnLabel={'Save Email hhhh'}
        btnBGColor={'lightgreen'}
      />
      <ActionBtn
        onPress={showEmail}
        btnLabel={'Show Saved Email'}
        btnBGColor={'green'}
      />
      <ActionBtn
        onPress={goToSignup}
        btnLabel={'Go To Signup'}
        btnBGColor={'pink'}
      />
    </View>
  );
};

export default Login;
