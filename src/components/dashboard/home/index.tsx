import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
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
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={selectImage} style={styles.selectImageButton}>
        <Text>Select an Image</Text>
      </Pressable>
    </View>
  );
};

export default Home;
