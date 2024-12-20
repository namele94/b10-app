import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton.tsx';
import COLORS from '../styles/colors.ts';

const ReservationSuccessScreen = ({navigation}: any) => {
  const navToMain = () => {
    navigation.navigate('DrawerScreens', {screen: 'Home'});
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../assets/success.png')} style={styles.icon} />
        <Text style={styles.title}>{'Спасибо!\nСтол зарезервирован'}</Text>
      </View>
      <CustomButton onPress={navToMain} title={'Главная'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  icon: {
    width: 300,
    height: 300,
  },
});

export default ReservationSuccessScreen;
