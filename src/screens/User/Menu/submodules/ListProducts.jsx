import {Image, StyleSheet, Text, TouchableOpacity, View, useAnimatedValue} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {AddToCartIcon, HeartIcon} from '../../../../utils/svg';
import {Product1} from '../../../../assets';
import {fontFamilySelector} from '../../../../utils/fonts';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function ListProducts({index, item}) {
    const navigation =useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('productDetails')}
      style={[
        styles.itemContainer,
        index % 2 === 0
          ? {
              marginRight: 10,
            }
          : {
              marginLeft: 10,
            },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 8,
          paddingRight: 6,
          marginBottom: 3,
        }}>
        <SvgXml xml={HeartIcon} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <Image source={Product1} style={{width: 94, height: 94}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom:scale(17)
          // borderWidth:1
          // paddingHorizontal:
        }}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            fontFamily: fontFamilySelector?.font500,
            flex: 8,
            color:'#151515',
            lineHeight:21
          }}>
          African Doughnut Mix
        </Text>
        <Text
          //  numberOfLines={1}
          style={{
            fontFamily: fontFamilySelector?.font500,
            flex: 3,
            textAlign: 'right',
            color:'#DB3C25',
            lineHeight:21

          }}>
          £30
        </Text>
      </View>
      <View>
        <TouchableOpacity
        style={{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#DB3C25',
            justifyContent:'center',
            paddingHorizontal:16,
            paddingVertical:8,
            borderRadius:scale(50),
            gap:6,
            // borderWidth:1
        }}
        >
            <SvgXml xml={AddToCartIcon}/>
            <Text
            style={{
                color:'white',
                fontFamily:fontFamilySelector?.font400,
                fontSize:scale(12),
                marginTop:3
            }}
            >Add to cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // padding: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingBottom:11,
    // borderWidth:1,
    flex: 0.5, // Ensure the item takes up the whole horizontal space
  },
  itemText: {
    textAlign: 'center',
    // Add any text styles you want here
  },
});
