import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground, //❗️
} from 'react-native';
import { THEME } from '../../utils/constants';
// import { THEME } from '../utils/constants';

export const Post = ({ post }) => {
  console.log(post)
  return (
    <View style={styles.post}>
      <ImageBackground source={{ uri: post.img }} style={styles.image}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
          {/* <Text>{post.text}</Text>
          <Text>{post.date}</Text>
          <Text>{post.bookmarked}</Text>      */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: THEME.PADDING_VERTICAL - 5,
    overflow: `hidden`,
  },
  image: {
    width: `100%`,
    height: 200,
  },
  textWrap: {
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
    paddingVertical: THEME.PADDING_VERTICAL / 4,
    alignItems: `center`,
    width: `100%`,
  },
  title: {
    color: THEME.WHITE,
    fontFamily: `openSansRegular`,
  },
});
