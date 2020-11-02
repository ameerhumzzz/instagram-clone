import React from 'react';
import {StyleSheet, Text, Platform} from 'react-native';
import {Header, Body, Left, Right} from 'native-base';

//Color
import {TextColor} from '../Utils/Color';

const CustomHeader = (props) => {
  //props
  const {title = '', left, right} = props;

  //Style
  const {headerTitle, headerBody} = Style;

  return (
    <Header style={{backgroundColor: '#f8f8f8', height: 45}}>
      <Left style={{flex: 0.3}}>{left && left()}</Left>
      <Body style={headerBody}>
        <Text style={headerTitle}>{title}</Text>
      </Body>
      <Right style={{flex: 0.3}}>{right && right()}</Right>
    </Header>
  );
};

const Style = StyleSheet.create({
  headerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: TextColor,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default CustomHeader;
