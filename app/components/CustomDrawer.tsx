import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
          x`
          <Text style={styles.menuText}>МАГАЗИН</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Reservation')}>
          <Text style={styles.menuText}>БРОНЬ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.menuText}>КОНТАКТЫ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Event')}>
          <Text style={styles.menuText}>СОБЫТИЯ РЕСТОРАНА</Text>
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
  },
  menuHeaderContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  menuHeaderText: {
    color: '#FFF',
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: '#5C0DAC',
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#300264',
    borderRadius: 25,
    marginBottom: 10,
  },
  menuText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
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
