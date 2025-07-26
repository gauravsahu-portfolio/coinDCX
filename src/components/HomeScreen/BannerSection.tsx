import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import PrimaryButton from '../../utils/PrimaryButton';
import { LinearGradient } from "expo-linear-gradient";

const BannerSection = () => {
  return (
    <LinearGradient  
        colors={['#07033aff', '#193a81ff', '#4d6ab9ff']}    
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        className='flex-1 flex-col items-center justify-center h-[40%] w-[100%]'>
            <Image 
                source={require('../../assets/images/cryptocurrency.png')}
                style={{ width: 60, height: 60, resizeMode: 'cover' }}
            />
            <Text className='text-gray-300 mb-2 mt-4'>GET STARTED</Text>
            <Text className='text-white font-bold text-lg mb-6'>Join over 15 million+ Crypto users</Text>
            <View className='flex-row justify-center w-[90%] overflow-hidden'>
                <PrimaryButton text='Create Account' containerStyle={{"backgroundColor": "white"}} textStyle={{"color": "blue"}} />
                <PrimaryButton text='Log In' containerStyle={{"backgroundColor": "#4d6ab9ff"}} textStyle={{"color": "white"}} />
            </View>
    </LinearGradient>
  )
}

export default BannerSection;