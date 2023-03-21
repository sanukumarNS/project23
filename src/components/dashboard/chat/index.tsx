import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles';

const Chat = () => {
  const [name, setName] = useState('');
  const saveNameStyle =
    name.length > 0 ? styles.saveEnabled : styles.saveDisabled;
  return (
    <View>
      <Text>Chat</Text>
      <TextInput placeholder="enter name" value={name} onChangeText={setName} />
      <Pressable style={saveNameStyle} disabled={name.length === 0}>
        <Text>Save Name</Text>
      </Pressable>
    </View>
  );
};

export default Chat;
