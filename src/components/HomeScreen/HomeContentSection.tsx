import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { HOME_SCREEN_BUTTONS_1, HOME_SCREEN_BUTTONS_2 } from '../../data/Buttons.data';

const HomeContentSection = () => {
  return (
    <View className='w-[100%] flex-col items-center py-4'>
        {/* Quick Action Buttons 1 */}
        <View className='flex-row items-center justify-around w-[95%]'>
            {
                HOME_SCREEN_BUTTONS_1.map((button) => (
                    <PrimaryButonView key={button.id} label={button.label} icon={require("../../assets/images/icons/buy.png")} />
                ))
            }
        </View>
        {/* Quick Action Buttons 2 */}
        <View className='flex-row mt-2 justify-around w-[95%]'>
            {
                HOME_SCREEN_BUTTONS_2.map((button) => (
                    <SecondaryButtonView key={button.id} label={button.label} icon={require("../../assets/images/icons/rupee.png")} />
                ))
            }
        </View>
    </View>
  )
}

export default HomeContentSection;

const PrimaryButonView = ({ label, icon }) => {
    return (
        <TouchableOpacity className='flex-col items-center'>
            <View className='p-3 bg-gray-200 rounded-md w-[50px] flex-row mb-2'>
                <Image source={icon} style={{ width: 24, height: 24 }} />
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}
const SecondaryButtonView = ({ label, icon }) => {
    return (
        <TouchableOpacity className='flex-row w-[45%] justify-center items-center bg-gray-300 rounded-md p-1'>
            <View className='p-1 flex-row mr-1'>
                <Image source={icon} style={{ width: 18, height: 18 }} />
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}



