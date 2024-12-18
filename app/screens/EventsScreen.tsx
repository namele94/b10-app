import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton.tsx';

const EventsScreen = (props: any) => {
  return (
    <ImageBackground
      source={require('../assets/eventbg.png')}
      style={styles.backgroundImage}
      resizeMode="cover" // Масштабирование фото на весь экран
    >
      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={() => props.navigation.navigate('EventGameScreen')}
          title={'Вечер Игр и Развлечений'}
          containerStyle={styles.buttonStyle}
        />
        <CustomButton
          onPress={() => props.navigation.navigate('EventMovieScreen')}
          title={'Вечер Кино с Ужином'}
          containerStyle={styles.buttonStyle}
        />
        <CustomButton
          onPress={() => props.navigation.navigate('EventRugbyScreen')}
          title={'Регби-вечер'}
          containerStyle={styles.buttonStyle}
        />
        <CustomButton
          onPress={() => props.navigation.navigate('EventCricketScreen')}
          title={'Крикетный день'}
          containerStyle={styles.buttonStyle}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Полупрозрачный фон
  },
  buttonStyle: {
    marginBottom: 16,
  },
  buttonsContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
});

export default EventsScreen;
