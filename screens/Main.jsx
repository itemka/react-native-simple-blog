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
import { HeaderButtons, Item } from 'react-navigation-header-buttons'; //❗

export const Main = ({ navigation }) => {
  const handleOnOpenPost = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      bookmarked: post.bookmarked,
    }); //❗
  };

  return (
    <View styles={styles.wrapper}>
     <FlatList
        keyExtractor={post => post.id.toString()}
        data={dataPosts}
        scrollEnabled={true}
        renderItem={({item}) => <Post post={item} onOpen={handleOnOpenPost} />}
     />
    </View>
  );
};

Main.navigationOptions = {
  headerTitle: `Blog`,
  //headerRight: <Text>sedfr</Text> //❗, but us lib: react-navigation-header-buttons
  headerRight: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-camera"
      onPress={() => console.log('Press photo')}
    />
  </HeaderButtons>,
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
