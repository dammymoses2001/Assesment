import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import ProductDetails from '../screens/Product/productDetails';
import TabNavigation from './tabNaviagtion';


const Stack = createStackNavigator();


export default function Main() {
  return (
    <Stack.Navigator initialRouteName='TabNavigation' screenOptions={{headerShown:false}}>
      <Stack.Screen 
      options={{headerShown:true}}
      name="productDetails" component={ProductDetails} />
      
      <Stack.Screen
      
      name="TabNavigation" component={TabNavigation} />

      
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})