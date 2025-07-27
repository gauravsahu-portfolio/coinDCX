import { View, Text } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import PrimaryButton from '../../utils/PrimaryButton';


const CryptoDetails = ({coinDetail}) => {
     const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView style={{ height: coinDetail != null ? 50 : 0 }}>
      <BottomSheet
        ref={bottomSheetRef}
      >
        <BottomSheetView className='flex-column items-center justify-center w-full h-full'>
            <View className='flex-row items-center justify-center'>
                <View className='flex-row justify-center w-[90%] overflow-hidden'>
                    <PrimaryButton text='Sell' containerStyle={{"backgroundColor": "red"}} textStyle={{"color": "white"}} />
                    <PrimaryButton text='Buy' containerStyle={{"backgroundColor": "green"}} textStyle={{"color": "white"}} />
                </View>
            </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

export default CryptoDetails;