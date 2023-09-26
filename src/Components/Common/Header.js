import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {scale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { SearchIcon, notificationBellIcon } from '../../utils/svg';
import { fontFamilySelector } from '../../utils/fonts';


export default function OptionHeader({title,titleStyle,refresh=false,iconLeft,iconRight,borderBottomWidth=1}) {
  //navigation.navigate(SELLER_PROFILE,{refresh:refresh}
    const navigation =useNavigation()
  return (
    <View
      style={{
        paddingTop:scale(24),
        paddingBottom:scale(16),
        paddingHorizontal: scale(26),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        // borderWidth:1,
        alignItems: 'center',
        borderBottomWidth:borderBottomWidth,
        borderBottomColor:'#E1E5E9',
        // marginBottom:5
      }}>
      {/* ... */}
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
          {iconLeft}
      </TouchableOpacity>
      
      <View>
        <Text style={styles?.Title}>{title}</Text>
      </View>
      
      <TouchableOpacity
        style={{marginLeft:5}}
        onPress={() => {}}>
          {iconRight}
        {/* <SvgXml xml={notificationBellIcon} /> */}
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  Title:{
    fontSize:scale(14),
    fontFamily:fontFamilySelector?.font400,
    color:'#151515'
  }
})