import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductBig} from '../../assets';
import {fontFamilySelector} from '../../utils/fonts';
import {scale} from 'react-native-size-matters';
import { SvgXml } from 'react-native-svg';
import { DropDownIcon, MinsIcon, PlusIcon } from '../../utils/svg';
import { ListData, pagination } from './Data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

export default function ProductDetailComp() {
  return (
    <View style={{paddingHorizontal: 24,paddingBottom:100}}>
      <Swiper 
      key={3}
        dotColor="#D9D9D9"
        activeDotColor="#DB3C25"
        showsPagination={true}
        style={{height:420}}
       >
        {pagination?.map((item,i)=>
        <View
        key={i}
        style={{flex:0.3}}
        >
        <Image
                source={item}
                style={{
                  height: 404,
                  width: '100%',
                  resizeMode: 'contain',
                }}
              />
        </View>
        )}


      </Swiper>
     

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <Text
          style={{
            fontFamily: fontFamilySelector?.font500,
            fontSize: 16,
            color: '#151515',
          }}>
          African Donut Mix (Puff Puff)
        </Text>
        <Text
          style={{
            fontFamily: fontFamilySelector?.font500,
            fontSize: 16,
            color: '#DB3C25',
          }}>
          £3.99
        </Text>
      </View>
      <View 
      style={{marginBottom:44}}
      >
        <Text
        style={{
          fontFamily: fontFamilySelector?.font400,
          fontSize: 12,
          color: '#4A4A4A',
          lineHeight:18,
          width:'95%'
        }}
        >
        Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....<Text
        style={{
          fontFamily: fontFamilySelector?.font400,
          fontSize: 12,
          color: '#DB3C25',
          lineHeight:18,
        }}
        >Read more</Text>
        </Text>
      </View>

      <View
      style={{marginBottom:40}}
      >
        {ListData?.map((item,index)=>
        <View
        key={index}
        style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          paddingVertical:13,
          borderBottomWidth:1,
          borderBottomColor: '#E1E5E9',
        }}
        >
          <Text
          style={{color:'#151515',fontFamily:fontFamilySelector?.font500}}
          >{item}</Text>
          <SvgXml xml={DropDownIcon}/>
        </View>
        )}
        
      </View>

      <View
      style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24
      }}
      >
      <SvgXml xml={MinsIcon}/>
      <Text
      style={{
        color:'#131313',
        fontSize:14,
        fontFamily:fontFamilySelector?.font500
      }}
      >1</Text>
        <SvgXml xml={PlusIcon}/>
      
      </View>

      <View>
        <TouchableOpacity
        style={{justifyContent:'center',flexDirection:'row',
      backgroundColor:'#DB3C25',
      paddingVertical:13,
      borderRadius:50,
      marginBottom:18
      }}
        >
          <Text
          style={{fontFamily:fontFamilySelector?.font400,
          color:'white',fontSize:14}}
          >Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{justifyContent:'center',flexDirection:'row',
      // backgroundColor:'white',
      paddingVertical:13,
      borderRadius:50,
      marginBottom:18,
      borderWidth:1,
      borderColor:'#DB3C25'
      }}
        >
          <Text
          style={{fontFamily:fontFamilySelector?.font400,
          color:'#DB3C25',fontSize:14}}
          >Subscribe to a Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
