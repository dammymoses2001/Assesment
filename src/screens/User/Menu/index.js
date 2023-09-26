import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import OptionHeader from '../../../Components/Common/Header';
import MenuComp from './MenuComp';
import CustomContainer from '../../../Components/Common/Container';

export default function MenuPage() {
    const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      header: props => <OptionHeader title={'Menu'} />,
    });
  }, []);
  return (
    // <CustomContainer  useScrollView={true}>
         <MenuComp/>
    // </CustomContainer>
   
  )
}

const styles = StyleSheet.create({})