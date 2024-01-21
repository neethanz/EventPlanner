import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetPostQuery} from '../services/post_service';
import {ScrollView} from 'react-native-gesture-handler';
import PostCommentsTile from '../components/molecules/PostCommentsTile';

export default function Posts() {
  const {data, isLoading} = useGetPostQuery();
  console.log(data);

  if (isLoading) {
    return <View />;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{paddingHorizontal: 16}}>
      <View>
        {data.map((item, index) => (
          <PostCommentsTile key={index} item={item} />
        ))}
        <Text>Posts</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
