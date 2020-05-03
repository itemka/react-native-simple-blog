import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { Post } from './Post';
import { THEME } from '../../utils/constants';

export const Posts = ({ posts = [], onOpen }) => {
  if (!posts.length) {
    return (
      <View styles={styles.wrapper}>
        <Text style={styles.noItems}>Empty!</Text>
      </View>
    );
  };

  return (
    <View styles={styles.wrapper}>
      <FlatList
        keyExtractor={post => post.id.toString()}
        data={posts}
        scrollEnabled={true}
        renderItem={({item}) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: THEME.PADDING_VERTICAL / 2,
  },
  noItems: {
    fontFamily: 'openSansRegular',
    textAlign: `center`,
    marginVertical: THEME.PADDING_HORIZONTAL / 2,
    fontSize: 20,
  },
});
