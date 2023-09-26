import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function TextInputComp({
    placeholder,
    secureTextEntry,
    textStyle
}) {
  return (
    <View>
      <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      
        style={[{
            borderWidth:1,
            paddingVertical:10,
            borderRadius:4,
            width:'100%',
            borderColor:'#f4f4f4',
            backgroundColor:'#F5F8FA',
            paddingHorizontal:13,
            fontWeight:'300'
            // flex:1
        },textStyle]}
      />
    </View>
  )
}

const styles = StyleSheet.create({})