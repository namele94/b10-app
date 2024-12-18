import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ReservationScreen from '../screens/ReservationScreen';
import EventsScreen from '../screens/EventsScreen';
import CustomDrawer from '../components/CustomDrawer';
import COLORS from '../styles/colors.ts';
import HeaderLogo from '../components/HeaderLogo.tsx';
import ContactScreen from '../screens/ContactScreen.tsx';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        headerTitle: () => (
          <HeaderLogo navToCart={() => navigation.navigate('Cart')} />
        ),
        headerStyle: {backgroundColor: COLORS.primary},
        headerTintColor: COLORS.white,
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: 'gray',
      })}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Reservation" component={ReservationScreen} />
      <Drawer.Screen name="Event" component={EventsScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
