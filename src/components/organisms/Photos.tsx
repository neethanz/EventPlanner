import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, com_styles} from '@/utils';
import HorizontalNewsList from './HorizontalImageList';
import Color from '@/utils/colors';

export default function Photos() {
  return (
    <View style={com_styles.section_container}>
      <View style={styles.header}>
        <Text style={com_styles.section_title_text}>Photoes</Text>
        <View style={styles.button_container}>
          <Text style={styles.button_text}>All Photos</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={16}
            color={Color.primary}
            style={{marginHorizontal: 8}}
          />
        </View>
      </View>
      <HorizontalNewsList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button_text: {
    fontSize: 16,
    color: Colors.primary,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
