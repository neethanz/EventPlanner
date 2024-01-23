import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CircleAvathar({width, url}) {
  return (
    <Image
      style={{height: width, width: width, borderRadius: width / 2}}
      source={{
        uri: url,
      }}
    />
  );
}
