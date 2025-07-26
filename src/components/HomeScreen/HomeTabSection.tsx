// HomeTabSection.js
import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator(); // Define Tab outside the component if it doesn't need to be recreated

const HomeTabSection = () => {
  return (
    <Tab.Navigator id={undefined} initialRouteName='Gainer'>
        <Tab.Screen name="Gainer" component={GainerTab} />
        <Tab.Screen name="Volume" component={VolumeTab} />
        <Tab.Screen name="Loser" component={LoserTab} />
    </Tab.Navigator>
  )
}

export default HomeTabSection;

const GainerTab = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Gainer Tab Content</Text>
        </View>
    )
}
const LoserTab = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loser Tab Content</Text>
        </View>
    )
}
const VolumeTab = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Volume Tab Content</Text>
        </View>
    )
}