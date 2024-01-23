import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Color from '@/utils/colors';
import {Colors, com_styles} from '@/utils';

export default function PostCounts() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostsScreen')}
      style={styles.container}>
      <Text style={styles.count_text}>{16}</Text>
      <Text
        style={[
          {
            textAlign: 'center',
          },
          com_styles.body_text,
        ]}>
        Posts
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
    borderWidth: 1,
    borderColor: Color.border,
  },
  count_text: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 19,
    fontWeight: '600',
  },
});
