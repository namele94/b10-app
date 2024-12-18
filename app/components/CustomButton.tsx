import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import COLORS from '../styles/colors.ts';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  secondTitle?: string;
  containerStyle?: ViewStyle;
}

const CustomButton = ({
  onPress,
  title,
  secondTitle,
  containerStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      {secondTitle && <Text style={styles.buttonText}>{secondTitle}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
