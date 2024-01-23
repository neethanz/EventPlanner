import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '@/utils/colors';
import {com_styles} from '@/utils';

export default function ImageCard({item}: {item: Photo}) {
  return (
    <View style={styles.image_container}>
      <Image source={{uri: item.url}} style={styles.image} />
      <View style={{padding: 20}}>
        <Text style={com_styles.body_text}>{item.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image_container: {
    height: 300,
    width: 244,
    borderColor: Color.border,
    borderWidth: 0.6,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
  },
});
