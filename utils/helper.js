import * as Font from 'expo-font';
import { Alert } from 'react-native';
import { DB } from '../database';

export const loadApplication = async () => {
  try {
    await Font.loadAsync({
      openSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
      openSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    });
    await DB.init();
    console.log('DB started...');
  } catch (err) {
    console.log('Error DB: ', err);
  }
};

export const warningDelete = (text, onPressDelete) => {
  return Alert.alert(
    `Delete`,
    `Are you sure to delete ${text}... ?`,
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: `Delete`,
        style: 'destructive',
        onPress: () => onPressDelete(),
      },
    ],
    { cancelable: false },
  );
};
