import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CircleAvathar} from '../atoms';
import Color from '@/utils/colors';
import {AVATHAR_URL} from '@env';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute'}}>
        <CircleAvathar width={44} url={AVATHAR_URL} />
      </View>
      <View style={{flexGrow: 1}}>
        <Text style={{textAlign: 'center'}}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    height: 64,
    borderColor: Color.border,
    borderBottomWidth: 1,
  },
});
