import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useGetPostCommentsQuery} from '../../services/post_service';
import Comments from './Comments';

export default function PostCommentsTile({item}) {
  const [expand, setExpand] = useState(false);

  return (
    <View
      style={{
        width: '100%',
        marginTop: 8,
        borderRadius: 4,
        backgroundColor: 'red',
      }}>
      <Text style={{fontSize: 16}}>{item.title}</Text>
      <Text style={{fontSize: 14}}>{item.body}</Text>
      <TouchableOpacity onPress={() => setExpand(pre => !pre)}>
        <Text>Comments</Text>
      </TouchableOpacity>

      {expand && <Comments postId={item.id} />}
    </View>
  );
}

const styles = StyleSheet.create({});
