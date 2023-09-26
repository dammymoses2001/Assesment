import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import CartList from './submodules/cartList';
import {fontFamilySelector} from '../../utils/fonts';
import BottomButton from './submodules/bottomButton';

export default function CartComp() {
  const renderItem = ({item}) => <CartList />;
  const ItemSeparator = () => {
    return <View style={{height: 42}} />; // Adjust the height to set the desired space between items
  };
  return (
    <View style={styles?.wrapper}>
      <FlatList
        data={[1, 2, 4]}
        renderItem={renderItem}
        keyExtractor={item => item}
        contentContainerStyle={{marginBottom: 88}} // Add space at the edges
        ItemSeparatorComponent={ItemSeparator} // Add space between items
        showsVerticalScrollIndicator={false}
      />
      <BottomButton/>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#f9f9f9',
    paddingTop: 10,
    flex: 1,
    paddingBottom: 200,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: 'lightgray',
    flex: 1, // Ensure the item takes up the whole horizontal space
  },
});
