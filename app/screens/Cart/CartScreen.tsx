import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../stores/StoreContext';
import COLORS from '../../styles/colors';
import ItemView from '../../components/ItemView.tsx';
import CustomButton from '../../components/CustomButton.tsx';

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
          renderItem={({item}) => <ItemView item={item} />}
          ListEmptyComponent={<EmptyCartView />}
        />
        {cartTotal && (
          <CustomButton
            onPress={navigateToConfirmScreen}
            title={'ИТОГО'}
            secondTitle={`$${cartTotal}`}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Text style={styles.emptyCartTitle}>Корзина пустая</Text>
      <Image
        source={require('../../assets/nodata.png')}
        style={styles.emptyCartIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  emptyCartTitle: {
    fontSize: 40,
    color: COLORS.gray,
    fontWeight: '600',
    marginBottom: 40,
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
});

export default observer(CartScreen);
