import {ImageCarousel, PostCounts, UpcomingEvent} from '@/components/molecules';
import {OrganizersList, Photos} from '@/components/organisms';
import {com_styles} from '@/utils';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {API_URL, API_TOKEN} from '@env';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCarousel />
        <View style={com_styles.page_container}>
          <UpcomingEvent />
          <OrganizersList />
          <Photos />
          <PostCounts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
