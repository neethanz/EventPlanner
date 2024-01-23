import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export default function LoadingIndicator() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
    </View>
  );
}
