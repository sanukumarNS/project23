import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from '../styles';

const ActionBtn = (props: any) => {
  console.log('Check props value', props);
  return (
    <Pressable
      onPress={() => props.onPress()}
      style={[styles.saveEmailButton, {backgroundColor: props.btnBGColor}]}>
      <Text>{props.btnLabel}</Text>
    </Pressable>
  );
};

export default ActionBtn;
