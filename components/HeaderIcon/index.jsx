import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { THEME } from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';

export const HeaderIcon = props => <HeaderButton
  iconSize={24}
  IconComponent={Ionicons} //❗
  color={Platform.OS === 'android' ? THEME.WHITE: THEME.MAIN_COLOR}
  {...props}
/>;
