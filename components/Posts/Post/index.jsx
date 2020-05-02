import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground, //❗️
  TouchableOpacity,
} from 'react-native';
import { THEME } from '../../../utils/constants';

export const Post = ({ post, onOpen }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
    <View style={styles.post}>
      <ImageBackground source={{ uri: post.img }} style={styles.image}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  post: {
    marginBottom: THEME.PADDING_VERTICAL - 5,
    marginHorizontal: THEME.PADDING_HORIZONTAL / 2,
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
