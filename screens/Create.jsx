import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback, //❗️
  Keyboard, //❗️
} from 'react-native';
import { HeaderIcon, Button } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { THEME } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions/post';
import { PhotoPicker } from '../components/PhotoPicker';

export const Create = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const imgRef = useRef();
  const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';

  const savePost = () => {
    const post = {
      id: 2,
      img: imgRef.current || defaultImg,
      text,
      date: new Date().toJSON(),
      bookmarked: false,
    };

    dispatch(addPost(post));
    setText('');
    navigation.navigate('Main');
  };

  const handlePhotoPick = uri => {
    imgRef.current = uri;
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
          <PhotoPicker onPick={handlePhotoPick} />
          {text !== '' && (
            <View style={styles.button}>
              <Button onPress={() => savePost()} color={THEME.MAIN_COLOR}>
                Create post
              </Button>
            </View>
          )}
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
