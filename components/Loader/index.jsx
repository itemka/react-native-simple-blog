import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { THEME } from '../../utils/constants';

export const Loader = ({ isLoader, children }) => isLoader
  ? (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
    </View>
  )
  : children;

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
});
