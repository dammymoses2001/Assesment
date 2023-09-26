import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform, StatusBar, ScrollView,Dimensions} from 'react-native';
import { scale } from 'react-native-size-matters';

const CustomContainer = ({ children, useScrollView = false ,routeName}) => {
  const [userDetails,setUserDetails]=useState()
  
  
  // console.log(userDetails,'userDetails')
  const containerStyle = Platform.select({
    ios: styles.containerIOS,
    android: styles.containerAndroid,
    default: styles.containerDefault,
  });

  const ContainerComponent = useScrollView ? ScrollView : View;

  return (
    <View style={[styles.container,{height:Dimensions.get('window').height,position:'relative'}]}>
      {/* <StatusBar translucent={false} /> */}
      <ContainerComponent 
      // contentContainerStyle={{flex:1}}
      style={{flex:1}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps='always'>
        <View style={containerStyle}>{children}</View>
      </ContainerComponent>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f9f9f9'
  },
  containerIOS: {
    paddingTop: 20, // Add the desired extra space for iOS
  },
  containerAndroid: {
    // paddingTop: StatusBar.currentHeight, // Add the StatusBar height as extra space for Android
  },
  containerDefault: {
    paddingTop: 20, // Add a fallback value for other platforms if needed
  },
  tabNavStyle:{position:'absolute',zIndex:99,bottom:0,marginHorizontal:scale(15),
  marginVertical:scale(16.5),
  // backgroundColor:colors?.green900,
  left:0,right:0,
  paddingVertical:scale(20),
  flexDirection:'row',
  justifyContent:'space-around',
  borderRadius:scale(40)
  }
});

export default CustomContainer;
