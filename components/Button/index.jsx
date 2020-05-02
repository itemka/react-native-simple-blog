import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import { THEME } from '../../utils/constants';

export const Button = ({
  onPress,
  color = THEME.MAIN_COLOR,
  children,
}) => {
  const Wrapper = Platform.OS === `androind`
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpasity={0.9}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
  </Wrapper>
  )
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  text: {
    color: THEME.WHITE,
  }
});
