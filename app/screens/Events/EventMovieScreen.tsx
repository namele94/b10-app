import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const EventMovieScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/event2.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/sticker2.png')}
          style={styles.stickerImg}>
          <View style={styles.overlay}>
            <Text style={styles.text1}>
              Приглашаем вас на уникальный Вечер Кино с Ужином
            </Text>
            <Text style={styles.text}>
              Окунитесь в мир кино и гастрономии и проведите вечер в атмосфере
              волшебства и вкусных открытий!
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default EventMovieScreen;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  stickerImg: {
    width: 350,
    height: 250,
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    position: 'absolute',
    bottom: height * 0.22,
    left: width * 0.12,
    width: '80%',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    position: 'absolute',
    bottom: height * 0.12,
    left: width * 0.15,
    width: '70%',
  },
});
