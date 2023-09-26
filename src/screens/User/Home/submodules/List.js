import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComp from '../../../../Components/Ui/ButtonComp'
import { scale } from 'react-native-size-matters';

export default function List() {
  return (
    <View
    style={{position:'relative'}}
    >
    <Text
    style={{textAlign:'center',color:'black',fontSize:12,fontWeight:'600'}}
    >Monday</Text>
    <View       style={styles?.Box}>
    <Text style={styles?.titleStyle}>
      RESEARCH METHODS - Mandatory Practical
    </Text>
    <Text style={styles?.descStyle}>May 09 13:00 - 15:00 MANDATORY</Text>
    <Text style={styles?.descStyle}>Mellor, S203 PC Lab </Text>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <ButtonComp
        btnText={'MANDATORY'}
        btnTextStyle={styles?.btnText}
        containerStyle={{
          backgroundColor: '#25a6f0',
          paddingHorizontal:10,
          borderRadius:20,
          height:35,
          marginTop:5
        }}
      />
    </View>

    </View>

    {/* <View
    style={{
        backgroundColor:'#25a6f0',
        paddingVertical:10,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }}
    >
        
    </View> */}
  </View>
  )
}

const styles = StyleSheet.create({
    Box:{
      backgroundColor: '#d9d9d9',
      marginVertical: 10,
      marginHorizontal: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 10,
    },
    btnText:{
      fontWeight:'600',
      fontSize:13,
    },
    titleStyle: {
      color: 'black',
      fontWeight: '600',
      fontSize: 13,
      marginBottom: scale(4),
    },
    descStyle: {
      fontSize: 10,
      color: 'black',
      fontWeight: '600',
    },
  });