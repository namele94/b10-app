import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import FastImage from 'react-native-fast-image';
import {useStore} from '../stores/StoreContext.tsx';
import CounterButton from './CounterButton.tsx';
import {observer} from 'mobx-react';

interface ItemViewProps {
  item: Product;
}

const CartItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus, removeFromCart} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const handleAddToCart = () => {
    productStore.handlePlus(item);
  };
  return (
    <View style={styles.card}>
      <FastImage
        source={{uri: item.image}}
        style={styles.pizzaImage}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <View style={styles.topContainer}>
          <View style={styles.nameContainer}>
            <Text> {item.countryFlag} </Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Pressable
            onPress={() => removeFromCart(item.id)}
            style={styles.deleteIconContainer}>
            <Image
              source={require('../assets/cross.png')}
              style={styles.deleteIcon}
            />
          </Pressable>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceSymbol}>$</Text>
          <Text style={styles.price}>{item.price.toFixed(1)}</Text>
          {quantity > 0 ? (
            <CounterButton
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 20,
    marginLeft: 30,
  },
  pizzaImage: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    zIndex: 99999,
    left: -20,
  },
  contentContainer: {
    width: '70%',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    width: '80%',
  },
  flagIcon: {
    width: 20,
    height: 14,
    marginRight: 6,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  priceSymbol: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
    marginRight: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    flex: 1,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 22,
  },
  button: {
    backgroundColor: COLORS.green,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  deleteIcon: {
    width: 16,
    height: 16,
  },
  deleteIconContainer: {
    width: '20%',
    alignItems: 'flex-end',
    paddingBottom: 8,
  },
});

export default observer(CartItemView);
