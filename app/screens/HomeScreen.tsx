import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Product} from '../types';
import ItemView from '../components/ItemView.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {filterData} from '../data/mockData.ts';

const HomeScreen = () => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter} =
    productStore;

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ItemView item={item} />;

  const renderFilter = ({item}: {item: string}) => (
    <Filter
      title={item}
      isActive={activeFilter === item}
      onPress={() => setFilter(item)}
    />
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
      <FlatList
        data={filterData}
        renderItem={renderFilter}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnContainer}
      />
    </SafeAreaView>
  );
};

const Filter = ({
  title,
  isActive,
  onPress,
}: {
  title: string;
  isActive: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.filterItemContainer} onPress={onPress}>
      <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
        {title}
      </Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: COLORS.white,
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
    color: 'gray',
    marginVertical: 5,
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
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    color: COLORS.secondary,
    paddingBottom: 8,
  },
  filterTextActive: {
    color: COLORS.primary,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  separator: {
    marginTop: 2,
    paddingRight: width * 0.025,
    borderRightWidth: 1,
  },
  filterContainer: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  filterItemContainer: {
    paddingHorizontal: width * 0.03,
    paddingVertical: 8,
  },
});

export default observer(HomeScreen);
