import React from 'react';
import {Image} from 'react-native';

export default function Carouselmage({item, width, height}) {
  return <Image source={{uri: item.url}} style={{width, height}} />;
}
