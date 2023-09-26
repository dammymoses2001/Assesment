import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {DeleteIcon, MinIconII, PlusIcon, PlusIconII} from '../../../utils/svg';
import {productDetail} from '../../../assets';
import {fontFamilySelector} from '../../../utils/fonts';

export default function CartList() {
  return (
   
      <View
        style={styles?.container}>
        <View
             style={styles?.container}>
          <View>
            <Image
              source={productDetail}
              style={{
                width: 92,
                height: 92,
              }}
            />
          </View>
          <View
            style={styles?.listContainer}>
            <Text
              style={styles?.NameText}>
              <Text
                style={styles?.name}>
                Asaro
              </Text>
              (Yam Porridge)
            </Text>
            <Text
              style={styles?.price}>
              £30
            </Text>
            <SvgXml xml={DeleteIcon} />
          </View>
        </View>
        <View
          style={styles?.quality}>
          <SvgXml xml={PlusIconII} />
          <Text
            style={styles?.number}>
            1
          </Text>
          <SvgXml xml={MinIconII} />
        </View>
      </View>
  
  );
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal: 24,
        backgroundColor: '#f9f9f9',
        paddingTop: 10,
      },
      container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      listContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      price:{
        fontFamily: fontFamilySelector?.font500,
        fontSize: 14,
        color: '#DB3C25',
        marginVertical: 6,
      },
      NameText:{
        fontFamily: fontFamilySelector?.font400,
        fontSize: 14,
      },
      name:{
        color: '#151515',
        fontFamily: fontFamilySelector?.font500,
      },
      quality:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        // marginBottom:5,
        alignItems: 'center',
      },
      number:{
        color: '#4A4A4A',
        fontSize: 14,
        fontFamily: fontFamilySelector?.font500,
      }
});
