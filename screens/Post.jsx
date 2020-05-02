import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { THEME } from '../utils/constants';

export const Post = () => {
  return (
    <View styles={styles.center}>
      <Text>Post</Text>
    </View>
  );
};

Post.navigationOptions = {
  headerTitle: `Post`,
  headerStyle: {
    backgroundColor: THEME.GREY_COLOR,
  },
  headerTintColor: THEME.WHITE,
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
});
