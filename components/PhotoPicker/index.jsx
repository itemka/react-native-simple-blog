import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; //❗️
import { THEME } from '../../utils/constants';
import { Button } from '../../components';
import * as Permissions from 'expo-permissions'; //❗️

async function askForPermissions() { //❗️
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL,
  );
  if (status !== 'granted') {
    Alert.alert('Error', 'You did not do permissions for photos!');
    return false;
  }
  return true;
};

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);
  
  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();

    if (!hasPermissions) return;

    const img = await ImagePicker.launchCameraAsync({ //❗️
      quality: 0.7,
      allowsEditing: false, //❗️false - can't us local photo editor
      aspect: [16, 9],
    });

    setImage(img.uri);
    onPick(img.uri);
  };

  return (
    <View style={styles.wrapper}>
      <Button onPress={takePhoto} color={THEME.EDIT_BUTTON_COLOR}>
        Take photo
      </Button>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: THEME.PADDING_HORIZONTAL / 2,
    alignItems: `center`,
  },
  image: {
    width: `100%`,
    height: 200,
    marginTop: THEME.PADDING_HORIZONTAL / 2,
  },
});
