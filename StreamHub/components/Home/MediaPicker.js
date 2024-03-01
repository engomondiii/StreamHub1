import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const MediaPicker = ({ onMediaSelected }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        //path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Handle the selected image here
        setSelectedMedia();
      }
    });
  };

  const sendMedia = () => {
    if (selectedMedia) {
      onMediaSelected(selectedMedia);
      setSelectedMedia(null);
    }
  };

  return (
    <View>
      {selectedMedia && (
        <View>
          <Image source={{ uri: selectedMedia.uri }} style={{ width: 100, height: 100 }} />
          <Text>{selectedMedia.name}</Text>
        </View>
      )}
      <TouchableOpacity onPress={openImagePicker}>
        <Text>Select Media</Text>
      </TouchableOpacity>
      {selectedMedia && (
        <TouchableOpacity onPress={sendMedia}>
          <Text>Send Media</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MediaPicker;
