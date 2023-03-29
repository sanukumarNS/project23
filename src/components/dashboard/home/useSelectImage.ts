import {useState} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';

const useSelectImage = () => {
  const [image, setImage] = useState('');
  const selectImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image);
    });
  };
  return {selectImage, image};
};

export default useSelectImage;
