import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useGetPostQuery} from '../services/post_service';
import {ScrollView} from 'react-native-gesture-handler';
import PostCommentsTile from '../components/molecules/PostCommentsTile';
import {LoadingIndicator} from '@/components/atoms';
import {com_styles} from '@/utils';

export default function PostsScreen() {
  const {data, isLoading} = useGetPostQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <View style={{paddingHorizontal: 8, paddingVertical: 16}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 12}}
        contentContainerStyle={{paddingHorizontal: 8}}>
        <Text style={com_styles.section_title_text}>New Posts</Text>

        <View>
          {data.map((item, index) => (
            <PostCommentsTile key={index} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
