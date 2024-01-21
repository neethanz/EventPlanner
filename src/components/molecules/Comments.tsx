import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {useGetPostCommentsQuery} from '../../services/post_service';

export default function Comments({postId}) {
  const {data, isLoading} = useGetPostCommentsQuery({postId});

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      {data.map(comments => (
        <Text>{comments.email}</Text>
      ))}
    </View>
  );
}
