import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

const AppDrawer = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'red',
          height: 200,
        }}/>
    </SafeAreaView>
  );
};

export default AppDrawer;
