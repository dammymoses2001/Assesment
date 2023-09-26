import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontFamilySelector } from '../../../utils/fonts'

export default function BottomButton() {
  return (
    <View
    style={styles?.wrapper}>
    <View
      style={styles?.container}>
      <Text
        style={styles?.total}>
        <Text style={{color: '#151515'}}> Total</Text>
        (3 items)
      </Text>
      <Text
        style={styles?.price}>
        £90
      </Text>
    </View>
    <TouchableOpacity
      style={styles?.button}>
      <Text
        style={styles?.checkout}>
        Checkout - £90
      </Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        marginHorizontal: 24,
        backgroundColor: '#F9F9F9',
        paddingTop: 10,
      },
      container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      total:{
        fontFamily: fontFamilySelector?.font500,
        color: '#4A4A4A',
        fontSize: 14,
      },
      price:{
        fontFamily: fontFamilySelector?.font500,
        color: '#151515',
        fontSize: 14,
      },
      button:{
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#DB3C25',
        paddingVertical: 13,
        borderRadius: 50,
        marginBottom: 18,
        //   borderWidth:1,
        //   borderColor:'#DB3C25'
      },
      checkout:{
        fontFamily: fontFamilySelector?.font400,
        color: 'white',
        fontSize: 14,
      }
})