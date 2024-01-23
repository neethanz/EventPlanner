import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {useGetPostCommentsQuery} from '../../services/post_service';
import {com_styles} from '@/utils';

export default function ({postId}: {postId: string}) {
  const {data, isLoading} = useGetPostCommentsQuery({postId});

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{paddingHorizontal: 4}}>
      <Text style={{color: '#fff', marginVertical: 8, fontSize: 12}}>
        Comments {'  '}
        {data?.length}
      </Text>
      {data?.map(comment => (
        <View
          key={comment.id}
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            marginVertical: 4,
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}>
          <Text style={{color: 'grey', fontSize: 12, marginBottom: 8}}>
            {comment.email}
          </Text>
          <Text style={com_styles.body_text}>{comment.body}</Text>
        </View>
      ))}
    </View>
  );
}
