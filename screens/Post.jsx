import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
  
export const Post = () => {
  return (
    <View styles={styles.center}>
      <Text>Post</Text>
    </View>
  );
};

Post.navigationOptions = {
  headerTitle: `Post`
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
