import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MainSlider() {
  return (
    <View>
      <Image
        style={{width: '100%', height: 200}}
        source={{
          uri: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2022-04/shutterstock_1170265711.jpg?itok=GT0lkKpi',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
