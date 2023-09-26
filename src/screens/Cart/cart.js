import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import ProductDetailComp from './ProductDetailComp'
import { useNavigation } from '@react-navigation/native';
import OptionHeader from '../../Components/Common/Header';
import { SvgXml } from 'react-native-svg';
import { ArrowLeftIcon } from '../../utils/svg';
import CustomContainer from '../../Components/Common/Container';
import CartComp from './CartComp';

const Cart = () => {
    const {setOptions, toggleDrawer} = useNavigation();

    useEffect(() => {
      setOptions({
        header: props => <OptionHeader 
        iconLeft={<SvgXml xml={ArrowLeftIcon}/>}
        borderBottomWidth={0}
        title={'Cart'}
        />,
      });
    }, []);
  return (
    <View
    style={{flex:1}}
    >
<CartComp/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})