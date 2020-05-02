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
import { Post } from '../components/Post'; 

export const Main = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate('Post'); //❗️
  };

  return (
    <View styles={styles.wrapper}>
     <FlatList
        keyExtractor={post => post.id.toString()}
        data={dataPosts}
        scrollEnabled={true}
        renderItem={({item}) => <Post post={item}/>}
     />
    </View>
  );
};

Main.navigationOptions = {
  headerTitle: `Main`
};

const styles = StyleSheet.create({
  wrapper: {
    padding: THEME.PADDING_VERTICAL / 2,
  },
});
