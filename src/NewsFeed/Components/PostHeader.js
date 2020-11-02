import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

//Component
import Avatar from './Avatar';
import UserName from './UserName';

const PostHeader = ({userName, avatar, stories}) => {
  //Styles
  const {headerView, headerLeft, userNameStyle} = Styles;

  return (
    <View style={headerView}>
      <View style={headerLeft}>
        <Avatar picture={avatar} stories={stories} />
        <UserName userName={userName} />
      </View>
      <TouchableOpacity activeOpacity={1} onPress={() => {}}>
        <Feather name="more-horizontal" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameStyle: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default PostHeader;
