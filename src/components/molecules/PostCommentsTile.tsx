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
import Color from '@/utils/colors';
import {com_styles} from '@/utils';

export default function PostCommentsTile({item}) {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={com_styles.title_text}>{item.title}</Text>
      <Text style={com_styles.body_text}>{item.body}</Text>
      <TouchableOpacity
        onPress={() => setExpand(pre => !pre)}
        style={styles.comment_bar}>
        {!expand && <Text style={{color: '#fff'}}>Comments</Text>}
        {expand && <Comments postId={item.id} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
    padding: 16,
    elevation: 5,
  },
  comment_bar: {
    backgroundColor: Color.dark,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 10,
  },
});
