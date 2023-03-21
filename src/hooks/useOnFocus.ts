import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const useOnFocus = (onFocus: () => void) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscripe = navigation.addListener('focus', onFocus);
    return unsubscripe;
  }, [navigation, onFocus]);
};
export default useOnFocus;
