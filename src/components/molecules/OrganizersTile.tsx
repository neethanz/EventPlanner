import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OrganizersTile() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        paddingHorizontal:24,
        borderBottomColor:"black",
        borderBottomWidth:0.6,paddingVertical:8
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20, marginRight: 24}}
          source={{
            uri: 'https://media.licdn.com/dms/image/C5603AQFVR_woCc9pkQ/profile-displayphoto-shrink_800_800/0/1629773856365?e=2147483647&v=beta&t=EckaySBLWXL0bhGjpxIF1E3kpLlvkijqKmowkn3P4sQ',
          }}
        />
        <View>
          <Text>Name</Text>
          <Text>Julia</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'red', height: 20, width: 20}}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
