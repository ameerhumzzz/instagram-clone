import React from 'react';
import {FlatList} from 'react-native';

//Compoments
import Post from './Post';

const PostList = ({posts}) => {
  return (
    <FlatList
      style={{flexGrow: 1}}
      data={posts}
      keyExtractor={(post) => post.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return <Post post={item} />;
      }}
    />
  );
};

export default PostList;
