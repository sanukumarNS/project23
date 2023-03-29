import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import routes from '../../../assets/routes';
import {BASE_URL, POSTS} from '../../../services/endpoints';
import {Post} from '../../../services/models/post';
import styles from './styles';
import useSelectImage from './useSelectImage';

const Home = () => {
  const {dispatch} = useNavigation();
  const {selectImage, image} = useSelectImage();

  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery('home', {
    queryFn: () => fetch(BASE_URL + POSTS).then(response => response.json()),
  });

  const renderPost = ({item}: {item: Post}) => {
    return (
      <View style={styles.postParent}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postBody}>{item.body}</Text>
      </View>
    );
  };
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
      <Pressable onPress={refetch} style={styles.refreshButton}>
        <Text>Refresh</Text>
      </Pressable>
      <ActivityIndicator animating={isLoading} />
      <View>
        <FlatList data={posts} renderItem={renderPost} />
      </View>
    </View>
  );
};

export default Home;
