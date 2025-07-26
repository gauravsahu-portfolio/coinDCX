import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeContentSection from '../components/HomeScreen/HomeContentSection';
import ProfileScreen from './ProfileScreen';
import { ScrollView, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();


const InvestmentScreen = () => {

  const getPriceChange = (priceChange) => {
      return priceChange.toFixed(2);
  };
  const formatNumber = (num) => {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toString();
  }

  const ListCoints = () => {
    return (
      <View className='flex-column items-center justify-center w-full h-full'>
      <View className='flex-row justify-between items-center w-[95%] py-1 border-b border-gray-300'>
        <View className='flex-row items-center'>
          <View className='flex-row items-center'>
            <Text className='mr-1 text-[12px] text-gray-500'>Name</Text>
            <View className='flex-column items-center justify-center h-[30px] mt-2'>
              <FontAwesome name="sort-up" color="gray" size={14} style={{height: 10, position: 'relative', top: 4}} />
              <FontAwesome name="sort-down" color="gray" size={14} style={{height: 20, position: 'relative', top: -4}} />
            </View>
          </View>
          <Text className='mx-2 text-[14px] text-gray-500'>/</Text>
          <View className='flex-row items-center'>
            <Text className='mr-1 text-[12px] text-gray-500'>Volume</Text>
            <View className='flex-column items-center justify-center h-[30px] mt-2'>
              <FontAwesome name="sort-up" color="gray" size={14} style={{height: 10, position: 'relative', top: 4}} />
              <FontAwesome name="sort-down" color="gray" size={14} style={{height: 20, position: 'relative', top: -4}} />
            </View>
          </View>
        </View>
        
        <View className='flex-row items-center'>
          <View className='flex-row items-center'>
            <Text className='mr-1 text-[12px] text-gray-500'>LTF</Text>
            <View className='flex-column items-center justify-center h-[30px] mt-2'>
              <FontAwesome name="sort-up" color="gray" size={14} style={{height: 10, position: 'relative', top: 4}} />
              <FontAwesome name="sort-down" color="gray" size={14} style={{height: 20, position: 'relative', top: -4}} />
            </View>
          </View>
          <Text className='mx-2 text-[14px] text-gray-500'>/</Text>
          <View className='flex-row items-center'>
            <Text className='mr-1 text-[12px] text-gray-500'>24hr Chg</Text>
            <View className='flex-column items-center justify-center h-[30px] mt-2'>
              <FontAwesome name="sort-up" color="gray" size={14} style={{height: 10, position: 'relative', top: 4}} />
              <FontAwesome name="sort-down" color="gray" size={14} style={{height: 20, position: 'relative', top: -4}} />
            </View>
          </View>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{display: 'flex', flexDirection: 'column' }}>
        {
          data.map((coin, index) => {
            return (
              <View className='flex-row justify-between w-[95%]' key={index}>
                <View className='flex-row items-center py-3'>
                  <Image className='mr-2' source={{uri: coin.image}} style={{width: 25, height: 25}} />
                  <View>
                    <Text>{coin.name}</Text>
                    <Text>Vol {formatNumber(coin.total_volume)}</Text>
                  </View>
                </View>
                <View className='flex-row items-center'>
                  <Text>{coin.current_price}</Text>
                  <View style={coin.price_change_percentage_24h > 0 ? {backgroundColor: 'green'} : {backgroundColor: 'red'}} className='max-w-[80px] ml-2 px-2 py-1 rounded-md'>
                    <Text className='text-white'>{coin.price_change_percentage_24h > 0 ? <Text>+</Text> : <Text></Text>} {getPriceChange(coin.price_change_percentage_24h)}%</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      </View>
    )
  }

  const CRYPTO_API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h,24h,7d";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(CRYPTO_API_URL); // Use CRYPTO_API_URL_WITH_KEY if you have a demo key
        
        if (!response.ok) {
          const errorBody = await response.json().catch(() => ({})); 
          throw new Error(errorBody.error || `HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        // console.log("Fetched crypto data:", json);
        setData(json);
      } catch (err) {
        console.error("Failed to fetch crypto data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);
  return (
    <>

      <Tab.Navigator id={undefined}>
        <Tab.Screen name="All" component={ListCoints} />
        <Tab.Screen name="INR" component={ProfileScreen} />
        <Tab.Screen name="USDT" component={ProfileScreen} />
        <Tab.Screen name="BTC" component={ProfileScreen} />
        <Tab.Screen name="ALTs" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
  
}

export default InvestmentScreen;




