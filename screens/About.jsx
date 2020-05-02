import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
  
export const About = () => {
  return (
    <View styles={styles.center}>
      <Text>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
});
