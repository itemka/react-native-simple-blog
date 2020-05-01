import * as Font from 'expo-font';

export const loadApplication = async () => {
  await Font.loadAsync({
    OpenSansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
  });
};
