import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
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

const ItemView: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus} = productStore;
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
        <View style={styles.nameContainer}>
          <Text> {item.countryFlag} </Text>
          <Text style={styles.name}>{item.name}</Text>
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
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    width: width * 0.43,
    margin: 8,
    marginTop: 50,
    paddingTop: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pizzaImage: {
    width: 160,
    height: 160,
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
    zIndex: 99999,
  },
  contentContainer: {
    height: height * 0.2,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  },
  priceSymbol: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4CAF50',
    marginRight: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
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
});

export default observer(ItemView);
