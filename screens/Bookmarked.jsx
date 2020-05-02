import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
  
export const Bookmarked = () => {
  return (
    <View styles={styles.center}>
      <Text>Bookmarked</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});