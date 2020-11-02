import React from 'react';
import {StyleSheet, Text} from 'react-native';

//color
import {TextColor} from '../../Utils/Color';

const UserName = ({userName}) => {
  return <Text style={Styles.userNameStyle}>{userName}</Text>;
};

const Styles = StyleSheet.create({
  userNameStyle: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
    color: TextColor,
  },
});

export default UserName;
