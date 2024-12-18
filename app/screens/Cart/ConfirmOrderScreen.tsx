import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const qrValue =
  'https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065&width=1100';

const ConfirmOrderScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.successIconContainer}>
        <View style={styles.successIcon}>
          <Image
            source={require('../../assets/success.png')}
            style={styles.checkIcon}
          />
        </View>
      </View>

      <Text style={styles.successText}>Ваш заказ успешно{'\n'}размещен</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value={qrValue}
          size={200}
          color="#000"
          backgroundColor="#fff"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DrawerScreens')}>
        <Text style={styles.buttonText}>НА ГЛАВНУЮ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  successIconContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  successText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 32,
  },
  qrContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#5C0DAC',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ConfirmOrderScreen;
