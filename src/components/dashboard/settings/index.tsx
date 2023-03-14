import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Settings = () => {
  const [selectedDate, setSelectedDate] = useState();
  const onChangeDate = (event, date) => {
    setSelectedDate(JSON.stringify(date));
    console.log(date);
  };
  return (
    <View style={styles.parent}>
      <Text>{selectedDate}</Text>
      <RNDateTimePicker value={new Date()} onChange={onChangeDate} />
    </View>
  );
};

export default Settings;
