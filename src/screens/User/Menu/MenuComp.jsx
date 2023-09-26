import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import { SearchIconII} from '../../../utils/svg';
import ListProducts from './submodules/ListProducts';

export default function MenuComp() {
  const ItemSeparator = () => {
    return <View style={{height: 16}} />; // Adjust the height to set the desired space
  };
  const renderItem = ({item, index}) => (
   <ListProducts item={item} index={index}/>
  );
  return (
    <View style={{marginTop: scale(16),paddingBottom:100}}>
   
      <View style={{}}>
        <FlatList
          ListHeaderComponent={
            <View style={styles?.Wrapper}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '70%',
                gap: 10,
              }}>
              <SvgXml xml={SearchIconII} />
              <TextInput
                placeholder="Search"
                style={{fontSize: scale(14), color: '#858585'}}
              />
            </View>
          </View>
          }
          data={[1, 2, 3, 4, 5, 6]}
          columnWrapperStyle={{flex: 1, justifyContent: 'flex-start'}}
          contentContainerStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: 24,
            // borderWidth:1
          }}
          numColumns={2}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    // marginHorizontal: scale(24),
    // borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E1E5E9',
    backgroundColor: 'white',
    height: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: scale(16),
  },
  itemContainer: {
    // padding: 1,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    // borderWidth:1,
    flex: 0.5, // Ensure the item takes up the whole horizontal space
  },
  itemText: {
    textAlign: 'center',
    // Add any text styles you want here
  },
});
