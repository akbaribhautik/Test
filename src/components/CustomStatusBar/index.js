import React from 'react';
import { StatusBar, View, StyleSheet, Platform } from 'react-native';
import { AppColors } from '../../constants';

const CustomStatusBar = ({ barStyle = "light-content", ...props }) => {
  return (
    <View style={[styles.statusBar, ]}>
      <StatusBar
        translucent
        backgroundColor={AppColors.app0212837}
        barStyle={barStyle}
        {...props}
      />
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default CustomStatusBar;
