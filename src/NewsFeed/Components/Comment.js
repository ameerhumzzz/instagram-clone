import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Components
import Description from './Description';

//Color
import {TextColor, Grey} from '../../Utils/Color';

const Comment = (props) => {
  //props
  const {comment, likes, userName, avatar} = props.comment;

  //styles
  const {heartStyle, greyText} = Styles;
  return (
    <View style={{marginVertical: 5}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 0.9}}>
          <Description
            userName={userName}
            avatar={avatar}
            description={comment}
            descriptionCollapse={false}
          />
          <View style={{flexDirection: 'row', marginLeft: 33}}>
            {likes != 0 && (
              <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                <Text style={greyText}>{`${likes} likes`}</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <Text style={greyText}>{'Reply'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={heartStyle}>
          <FontAwesome
            name="heart-o"
            size={15}
            color={TextColor}
            style={{marginRight: 15}}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  heartStyle: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greyText: {
    fontSize: 12,
    color: Grey,
    marginRight: 10,
    fontWeight: '500',
  },
});

export default Comment;
