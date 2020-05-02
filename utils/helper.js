import * as Font from 'expo-font';

export const loadApplication = async () => {
  await Font.loadAsync({
    openSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
  });
};
