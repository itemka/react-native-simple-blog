import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { THEME } from '../utils/constants';
import { dataPosts } from './utils/data';
import { Button } from '../components';

export const Post = ({ navigation }) => {
  const postId = navigation.getParam('postId'); //❗️

  const post = dataPosts.find(p => p.id === postId);

  const handleRemove = () => {
    Alert.alert( //❗️
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

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    headerStyle: {
      backgroundColor: THEME.GREY_COLOR,
    },
    headerTintColor: THEME.WHITE, 
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
