import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '@/utils/colors';

export default function CustomButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            backgroundColor: Color.primary,
            paddingVertical: 12,
          },
        ]}>
        <Text style={{color: '#fff'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
