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
      <TouchableOpacity style={styles.button} onPress={minus}>
        <Text style={styles.buttonText}>-</Text>
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
    borderRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, // Тень для Android
  },
  button: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary || '#5C0DAC',
  },
  valueContainer: {
    backgroundColor: COLORS.primary || '#5C0DAC',
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  valueText: {
    fontSize: 20,
    color: COLORS.white || '#FFF',
    fontWeight: 'bold',
  },
});

export default CounterButton;
