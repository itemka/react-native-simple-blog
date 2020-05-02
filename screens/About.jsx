import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { HeaderIcon } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

export const About = () => {
  return (
    <View style={styles.center}>
      <Text>Thit the best application for notes!</Text>
      <Text>Application version: <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  );
};

About.navigationOptions = ({ navigation }) => ({
  headerTitle: `About this app`,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontFamily: 'openSansBold',
  },
});
