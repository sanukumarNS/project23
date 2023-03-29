import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useQueryClient} from 'react-query';
import styles from './styles';

const Settings = () => {
  const [selectedDate, setSelectedDate] = useState();
  const client = useQueryClient();
  const refreshPosts = () => {
    client.refetchQueries({queryKey: 'posts'});
    // client.clear()
    // client.cancelQueries();
  };
  return (
    <View style={styles.parent}>
      <Text>{selectedDate}</Text>
      <Pressable onPress={refreshPosts}>
        <Text>Refresh My data</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
