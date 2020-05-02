import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import { THEME } from '../utils/constants';
import { dataPosts } from './utils/data';
import { Post, HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

export const Bookmarked = ({ navigation }) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    });
  };

  return (
    <View styles={styles.wrapper}>
     <FlatList
        keyExtractor={post => post.id.toString()}
        data={dataPosts.filter(post => post.bookmarked)}
        scrollEnabled={true}
        renderItem={({item}) => <Post post={item} onOpen={handleOnOpenPost} />}
     />
    </View>
  );
};

Bookmarked.navigationOptions = {
  headerTitle: `Favorites`,
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => console.log('Press photo')}
    />
  </HeaderButtons>,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: THEME.PADDING_VERTICAL / 2,
  },
});
