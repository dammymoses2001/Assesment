import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Menu} from '../acce';
import Home from '../screens/User/Home';
import {SvgXml} from 'react-native-svg';
import {CartIcon, CartIconFocus, HomeIcon, MenuIcon, MenuIconI} from '../utils/svg';
import {scale} from 'react-native-size-matters';
import {fontFamilySelector} from '../utils/fonts';
import {Account} from '../assets';
import MenuPage from '../screens/User/Menu';
import Cart from '../screens/Cart/cart';

//user-circle-o

//home
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabNavigation() {
  return (
    <Tab.Navigator

      tabBarOptions={
        {
          // showLabel:false,
        }
      }
      screenOptions={({route}) => ({
        
        tabBarStyle: {
          // backgroundColor:'#0000ff',
          height: 80,
          position: 'absolute',
          shadowOpacity: 0,
          shadowRadius: 0,
          fontSize: 15,

          // left:10,
          // right:10
        },
        tabBarItemStyle: {
          // backgroundColor:'#00ff00',
          margin: 5,
          borderRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: scale(12),
          fontFamily: fontFamilySelector?.font400,
        },
        tabBarIcon: ({focused, color = '#858585', size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? (
              <SvgXml xml={HomeIcon} />
            ) : (
              <SvgXml xml={HomeIcon} />
            );
          }
          if (route.name === 'Menu') {
            iconName = focused ? (
              <SvgXml xml={MenuIcon} />
            ) : (
              <SvgXml xml={MenuIconI} />
            );
          }
          if (route.name === 'Cart') {
            iconName = focused ? (
              <SvgXml xml={CartIconFocus} />
            ) : (
              <SvgXml xml={CartIcon} />
            );
          } else if (route.name === 'Account') {
            iconName = focused ? (
              <Image style={{width: 24, height: 24}} source={Account} />
            ) : (
              <Image style={{width: 24, height: 24}} source={Account} />
            );
          }

          //graduation-cap

          // You can return any component that you like here!
          return iconName;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={MenuPage} />

      <Tab.Screen name="Cart" component={Cart} />

      <Tab.Screen name="Account" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
