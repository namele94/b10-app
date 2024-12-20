import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/StoreContext';
import COLORS from '../../styles/colors';
import CustomButton from '../../components/CustomButton.tsx';
import CartItemView from '../../components/CartItemView.tsx';

const CartScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, cartTotal, clearCart} = productStore;

  const navigateToConfirmScreen = () => {
    navigation.navigate('ConfirmOrder');
    clearCart();
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartItemView item={item} />}
          ListEmptyComponent={<EmptyCartView />}
        />

        {cartTotal && (
          <View style={styles.bottomContainer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Итого</Text>
              <Text style={styles.totalText}>${cartTotal}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                onPress={navigateToConfirmScreen}
                title={'Разместить заказ'}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Image
        source={require('../../assets/trash.png')}
        style={styles.emptyCartIcon}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteGB,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  bottomContainer: {},
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default observer(CartScreen);
