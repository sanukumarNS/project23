import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import routes from '../../../assets/routes';
import {BASE_URL, POSTS} from '../../../services/endpoints';
import {Post} from '../../../services/models/post';
import styles from './styles';
import useSelectImage from './useSelectImage';

const Home = () => {
  const {dispatch} = useNavigation();
  const {selectImage, image} = useSelectImage();
  const [isActivityIndicatorVisible, setIsAcitivityIndicatorVisible] =
    useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const getPosts = async () => {
    setIsAcitivityIndicatorVisible(true);
    try {
      const postsResponse = await fetch(BASE_URL + POSTS);
      const postsResponseJson = await postsResponse.json();
      setPosts(postsResponseJson);
      console.log(postsResponseJson.user.id);
    } catch (e) {
      ToastAndroid.show('An exception occured ' + e, ToastAndroid.SHORT);
    }
    setIsAcitivityIndicatorVisible(false);
  };
  const renderPost = ({item}: {item: Post}) => {
    return (
      <View style={styles.postParent}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postBody}>{item.body}</Text>
      </View>
    );
  };
  useEffect(() => {
    getPosts();
  }, []);
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
  const refresh = () => {
    getPosts();
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
      <Pressable onPress={refresh} style={styles.refreshButton}>
        <Text>Refresh</Text>
      </Pressable>
      {/* Display posts */}
      {/* {condition ? (
        <ActivityIndicator animating={isActivityIndicatorVisible} />
      ) : null} */}
      <ActivityIndicator animating={isActivityIndicatorVisible} />
      <View>
        <FlatList data={posts} renderItem={renderPost} />
      </View>
    </View>
  );
};

export default Home;
