import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';

interface DrawerProps {
  navigation: any;
}

const CustomDrawer: React.FC<DrawerProps> = props => {
  const {navigation} = props;
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.menuText}>Корзина</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Reservation')}>
          <Text style={styles.menuText}>Резерв столика</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.menuText}>Контакты</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Event')}>
          <Text style={styles.menuText}>События ресторана</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('../assets/cart.png')}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.greenBG,
  },
  menuHeaderContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuHeaderText: {
    color: COLORS.white,
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: COLORS.greenBG,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    marginBottom: 10,
  },
  menuText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  cartIcon: {
    width: 60,
    height: 60,
  },
});

export default CustomDrawer;
