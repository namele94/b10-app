import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../../screens/Cart/CartScreen.tsx';
import COLORS from '../../styles/colors';
import ConfirmOrderScreen from '../../screens/Cart/ConfirmOrderScreen.tsx';
import HeaderLogo from '../../components/HeaderLogo.tsx';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerStyle: {backgroundColor: COLORS.white},
        headerTintColor: COLORS.secondary,
        headerBackTitle: '',
        headerShadowVisible: false,
        title: '',
      })}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
