import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeContentSection from '../components/HomeScreen/HomeContentSection';
import ProfileScreen from './ProfileScreen';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CryptoDetails from '../components/SpecialComponents/CryptoDetails';
import CryptoList from '../components/InvestmentScreen/CryptoList';
import { set } from 'zod';

const Tab = createMaterialTopTabNavigator();

const InvestmentScreen = () => {

  const [coinDetail, setCoinDetail] = useState(null);

  const pressHandler = (coin) => {
    if (coinDetail && coinDetail.id === coin.id) {
      setCoinDetail(null);
    }
    else {
      setCoinDetail(coin);
    }
    console.log('Coin pressed:', coin.name);
  }
  return (
    <>
      <CryptoList pressHandler={pressHandler} />
      <CryptoDetails coinDetail={coinDetail} />
    </>
  )
}

export default InvestmentScreen;




