import React, {useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useQueryClient} from 'react-query';
import {AppContext} from '../../../root';
import styles from './styles';

const Settings = () => {
  const [selectedDate, setSelectedDate] = useState();
  const {setVersion} = useContext(AppContext);
  const client = useQueryClient();
  const refreshPosts = () => {
    client.refetchQueries({queryKey: 'posts'});
    // client.clear()
    // client.cancelQueries();
  };
  const setVersionTo5 = () => {
    setVersion('5');
  };
  return (
    <View style={styles.parent}>
      <Text>{selectedDate}</Text>
      <Pressable onPress={refreshPosts}>
        <Text>Refresh My data</Text>
      </Pressable>
      <Pressable onPress={setVersionTo5}>
        <Text>Set version to 5</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
