import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
  
export const Create = () => {
  return (
    <View style={styles.center}>
      <Text>Create</Text>
    </View>
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
  center: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
});
