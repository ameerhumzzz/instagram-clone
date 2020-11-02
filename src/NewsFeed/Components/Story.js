import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Compoment
import Avatar from './Avatar';
//Color
import {TextColor} from '../../Utils/Color';

const Story = (props) => {
  //props
  const {story, mine} = props;
  const {name, picture} = story;

  //Styles
  const {mainView} = Styles;

  return (
    <View style={mainView}>
      <Avatar picture={picture} mine={mine} stories={true} />
      <Text numberOfLines={1} style={{color: TextColor, marginTop: 5}}>
        {mine ? 'Your story' : name}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    width: 70,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Story;
