import {OrganizersTile} from '@/components/molecules';
import {useGetUsersQuery} from '@/services/user_service';
import {com_styles} from '@/utils';
import React from 'react';
import {Text, View} from 'react-native';
import {LoadingIndicator} from '../atoms';

export default function OrganizersList() {
  const {data, isLoading} = useGetUsersQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <View style={com_styles.section_container}>
      <Text style={com_styles.section_title_text}>Organizers</Text>
      {data?.slice(0, 2).map(item => (
        <OrganizersTile key={item.id} />
      ))}
    </View>
  );
}
