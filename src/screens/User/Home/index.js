import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import OptionHeader from '../../../Components/Common/Header';
import {scale} from 'react-native-size-matters';
import ButtonComp from '../../../Components/Ui/ButtonComp';
import List from './submodules/List';

export default function Home() {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      header: props => <OptionHeader title={'Edit Profile'} />,
    });
  }, []);
  return (
    <ScrollView
    contentContainerStyle={{flex:1}}
    >
      

     

      {/* Mellor, S203 PC Lab */}
    </ScrollView>
  );
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
