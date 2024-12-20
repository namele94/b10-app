import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
}

const CounterButton: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonLeft]}
        onPress={minus}>
        <Text style={[styles.buttonText, styles.leftBtnText]}>-</Text>
      </TouchableOpacity>

      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={plus}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '500',
    color: COLORS.white,
  },
  valueContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  valueText: {
    fontSize: 17,
    color: COLORS.secondary,
    fontWeight: '500',
  },
  buttonLeft: {
    backgroundColor: 'rgba(5, 124, 34, 0.1)',
  },
  leftBtnText: {
    color: COLORS.green,
    zIndex: 99999,
  },
});

export default CounterButton;
