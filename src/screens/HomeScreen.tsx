import {ScrollView, StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {MainSlider} from '../components/molecules';
import OrganizersTile from '../components/molecules/OrganizersTile';
import NewsCards from '../components/molecules/NewsCards';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <MainSlider />
      <OrganizersTile />
      <OrganizersTile />
      <OrganizersTile />
      <OrganizersTile />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map(item => (
          <NewsCards key={item} />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Posts")}
        style={{alignItems: 'center', justifyContent: 'center', height: 100}}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          {16} Post
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
