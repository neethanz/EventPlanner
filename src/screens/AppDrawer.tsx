import {DrawerProfileTile} from '@/components/molecules';
import Color from '@/utils/colors';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppDrawer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <DrawerProfileTile />
        <View style={styles.logoutContainer}>
          <MaterialCommunityIcons
            name="logout-variant"
            size={24}
            style={styles.logoutIcon}
            color={Color.primary}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </View>

        <View style={styles.versionContainer}>
          <Text>Version 0.0.1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  logoutIcon: {
    marginHorizontal: 8,
  },
  logoutText: {
    color: Color.primary,
  },
  versionContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 24,
  },
});
