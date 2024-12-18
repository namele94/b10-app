import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useStore} from '../stores/StoreContext';
import COLORS from '../styles/colors';
import {Product} from '../types';
import CounterButton from './CounterButton.tsx';

interface ItemViewProps {
  item: Product;
}

const ItemView = observer(({item}: ItemViewProps) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
        {quantity > 0 ? (
          <CounterButton
            value={quantity}
            plus={() => handlePlus(item)}
            minus={() => handleMinus(item.id)}
          />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>В корзину</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

export default ItemView;

const styles = StyleSheet.create({
  container: {padding: 10},
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: COLORS.white,
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    fontWeight: '600',
    backgroundColor: COLORS.primary,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: COLORS.primary,
  },
});
