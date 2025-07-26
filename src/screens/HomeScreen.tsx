import { View, Image } from 'react-native';
import React from 'react';
import BannerSection from '../components/HomeScreen/BannerSection';
import HomeContentSection from '../components/HomeScreen/HomeContentSection';
import HomeTabSection from '../components/HomeScreen/HomeTabSection';

const HomeScreen = () => {
  return (
    <View className='flex-col items-center'>
      {/* Banner Section */}
      <BannerSection />
      <HomeContentSection />
        <HomeTabSection />
    </View>
  )
}

export default HomeScreen;