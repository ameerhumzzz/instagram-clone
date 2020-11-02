import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Strings
import {ComingSoonText} from '../Utils/String';

//Colors
import {TextColor} from '../Utils/Color';

const ComingSoon = () => {
  //styles
  const {textStyle, textView} = Styles;

  return (
    <View style={textView}>
      <Text style={textStyle}>{ComingSoonText}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  textView: {
    alignSelf: 'center',
  },
  textStyle: {
    color: TextColor,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default ComingSoon;
