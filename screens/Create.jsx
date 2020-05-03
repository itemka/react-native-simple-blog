import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableWithoutFeedback, //❗️
  Keyboard, //❗️
} from 'react-native';
import { HeaderIcon, Button } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { THEME } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions/post';

export const Create = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const img = `https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg`;

  const savePost = () => {
    const post = {
      id: 2,
      img,
      text,
      date: new Date().toJSON(),
      bookmarked: false,
    };

    dispatch(addPost(post));
    navigation.navigate('Main');
    setText('');
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create a new post</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Enter note text"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image style={styles.image} source={{ uri: img }} />
          <View style={styles.button}>
            <Button onPress={() => savePost()} color={THEME.MAIN_COLOR}>
              Create post
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

Create.navigationOptions = ({ navigation }) => ({
  headerTitle: `Create post`,
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderIcon}>
    <Item
      title="Toggle Drawer"
      iconName="ios-menu"
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>,
});

const styles = StyleSheet.create({
  wrapper: {
    padding: THEME.PADDING_HORIZONTAL / 2,
  },
  title: {
    fontSize: 20,
    textAlign: `center`,
    fontFamily: 'openSansRegular',
    marginVertical: THEME.PADDING_VERTICAL / 3,
  },
  textarea: {
    marginBottom: THEME.PADDING_HORIZONTAL / 2,
    padding: THEME.PADDING_VERTICAL / 2,
  },
  image: {
    height: 200,
    width: `100%`,
  },
  button: {
    marginTop: THEME.PADDING_VERTICAL,
    alignItems: `center`,
  },
});
