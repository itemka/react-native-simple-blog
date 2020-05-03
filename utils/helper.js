import * as Font from 'expo-font';
import { Alert } from 'react-native';

export const loadApplication = async () => {
  await Font.loadAsync({
    openSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
  });
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
