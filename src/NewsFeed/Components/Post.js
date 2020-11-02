import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Image from 'react-native-image-progress';

//Component
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

//Color
import {Grey} from '../../Utils/Color';

const Post = ({post}) => {
  //props
  const {userName, avatar, stories, likes, caption, comments, picture} = post;

  return (
    <View style={{marginVertical: 5}}>
      <PostHeader userName={userName} avatar={avatar} stories={stories} />

      <Image
        style={{height: 300}}
        source={{uri: picture.uri}}
        indicator={ActivityIndicator}
        indicatorProps={{
          color: Grey,
        }}
        resizeMode={'contain'}
      />

      <PostFooter
        likes={likes}
        userName={userName}
        description={caption}
        avatar={avatar}
        comments={comments}
      />
    </View>
  );
};

export default Post;
