import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Post } from './Post';
import { THEME } from '../../utils/constants';

export const Posts = ({ posts, onOpen }) => {
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
});
