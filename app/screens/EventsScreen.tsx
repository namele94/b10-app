import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

const EventsScreen = (props: any) => {
  return (
    <ImageBackground
      source={require('../assets/events.png')}
      style={styles.backgroundImage}>
      <SafeAreaView edges={['bottom']} style={styles.safeArea}>
        <View style={styles.buttonsContainer}>
          <Text>17 января в 20:00</Text>
          <CustomButton
            onPress={() => props.navigation.navigate('EventGameScreen')}
            title={'Пицца и Кино'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text>24 января в 19:00</Text>
          <CustomButton
            onPress={() => props.navigation.navigate('EventMovieScreen')}
            title={'Мастер-класс по приготовлению пиццы'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text>1 февраля в 16:00 </Text>
          <CustomButton
            onPress={() => props.navigation.navigate('EventRugbyScreen')}
            title={'Олимпийский бранч'}
            containerStyle={styles.buttonStyle}
            outline
          />
          <Text>5 февраля в 21:00</Text>
          <CustomButton
            onPress={() => props.navigation.navigate('EventCricketScreen')}
            title={'Вечер Футбола '}
            containerStyle={styles.buttonStyle}
            outline
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  buttonStyle: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flex: 1,
    paddingTop: 150,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
});

export default EventsScreen;
