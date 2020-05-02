import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { THEME } from '../utils/constants';
import { Button } from '../components';
import { HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmarked } from '../redux/actions/post';

export const Post = ({ navigation }) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam('postId'); //❗️
  const post = useSelector(state => state.post.posts.find(post => post.id === postId));

  const handleToggle = useCallback(() => {
    dispatch(toggleBookmarked(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    navigation.setParams({ handleToggle });
  }, [handleToggle]);

  const bookmarked = useSelector(state => state.post.favoritePosts.some(post => post.id === postId));

  useEffect(() => {
    navigation.setParams({ bookmarked });
  }, [bookmarked]);

  const handleRemove = () => {
    Alert.alert(
      `Delete`,
      `Are you sure to delete ${post.text.slice(0, 10)}... ?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: `Delete`,
          style: 'destructive',
          onPress: () => {

          }
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <ScrollView styles={styles.center}>
      <Image source={{ uri: post.img }} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.text}>{post.text}</Text>
      </View>
      <View style={styles.delete}>
        <Button color={THEME.DANGER_COLOR} onPress={handleRemove}>
          Delete
        </Button>
      </View>
    </ScrollView>
  );
};

Post.navigationOptions = ({ navigation }) => { //❗️
  const date = navigation.getParam('date');
  const bookmarked = navigation.getParam('bookmarked');
  const handleToggle = navigation.getParam('handleToggle');
  const iconName = bookmarked ? `ios-star` : `ios-star-outline`;

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    headerStyle: {
      backgroundColor: THEME.GREY_COLOR,
    },
    headerTintColor: THEME.WHITE, 
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
      <Item
        title="Star"
        iconName={iconName}
        onPress={handleToggle}
        color={THEME.WHITE}
      />
    </HeaderButtons>,
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
  image: {
    width: `100%`,
    height: 200,
  },
  textWrap: {
    padding: THEME.PADDING_HORIZONTAL / 2,
  },
  text: {
    fontFamily: `openSansRegular`,
  },
  delete: {
    alignItems: `center`,
  }
});
