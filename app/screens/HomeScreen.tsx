import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Product} from '../types';
import ItemView from '../components/ItemView.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';

const HomeScreen = () => {
  const {productStore} = useStore();
  const {loadProducts, products} = productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ItemView item={item} />;

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  image: {width: '100%', height: 150, borderRadius: 8},
  title: {fontSize: 16, fontWeight: 'bold', marginTop: 5},
  price: {color: 'gray', marginVertical: 5},
  button: {backgroundColor: '#5C0DAC', padding: 10, borderRadius: 8},
  buttonText: {color: '#FFF', textAlign: 'center'},
});

export default observer(HomeScreen);
