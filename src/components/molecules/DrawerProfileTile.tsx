import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, com_styles} from '@/utils';
import Color from '@/utils/colors';
import {CircleAvathar} from '../atoms';
import {AVATHAR_URL} from '@env';

export default function DrawerProfileTile() {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <CircleAvathar width={44} url={AVATHAR_URL} />
        <View style={{marginLeft: 24}}>
          <Text style={com_styles.title_text}>Name</Text>
          <Text style={com_styles.body_text}>Julia</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {height: 44, width: 44, borderRadius: 22, marginRight: 24},
});
