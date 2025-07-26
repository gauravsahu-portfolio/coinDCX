import { TailwindProvider } from "tailwindcss-react-native";
import "./global.css";
import { Text, Image } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import InvestmentScreen from "./src/screens/InvestmentScreen";
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false
        }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ()=><Foundation name="home" color="#000" size={24} /> }} />
      <Tab.Screen name="Investment" component={InvestmentScreen} options={{ tabBarIcon: ()=> <MaterialIcons name="monetization-on" color="#000" size={24} /> }} />
      <Tab.Screen name="Market" component={InvestmentScreen} options={{ tabBarIcon: ()=> <Entypo name="bar-graph" color="#000" size={24} /> }} />
      <Tab.Screen name="Portfolio" component={InvestmentScreen} options={{ tabBarIcon: ()=> <Foundation name="graph-pie" color="#000" size={24} /> }} />
    </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
