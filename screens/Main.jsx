import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export const Main = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate('Post'); //❗️
  };

  return (
    <View styles={styles.center}>
      <Text>Main</Text>
      <Button title="go to post" onPress={handleOnPress}/>
    </View>
  );
};

Main.navigationOptions = {
  headerTitle: `wdafa`
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
