import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

//Color
import {TextColor,Grey} from '../../Utils/Color';

//Components
import Description from './Description';

const PostFooter = (props) => {
  //props
  const {likes, userName, description, comments, avatar} = props;

  //Styles
  const {actionsView, likesStyle, commentStyle} = Styles;

  const navigation = useNavigation();

  const navigateToComments = () => {
    navigation.navigate('Comments', {
      data: {
        userName,
        description,
        comments,
        avatar,
      },
    });
  };

  return (
    <View style={{marginHorizontal: 10}}>
      <View style={actionsView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <FontAwesome
              name="heart-o"
              size={24}
              color={TextColor}
              style={{marginRight: 15}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigateToComments();
            }}>
            <Feather
              name="message-circle"
              size={24}
              color={TextColor}
              style={{marginRight: 15}}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <Feather
              name="send"
              size={24}
              color={TextColor}
              style={{marginRight: 15}}
            />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" size={24} />
      </View>

      {likes && likes != 0 && (
        <Text style={likesStyle}>{`${likes} likes`}</Text>
      )}

      {description && description.length != 0 && (
        <Description
          userName={userName}
          description={description}
          navigateToComments={navigateToComments}
        />
      )}

      {comments && comments.length !== 0 && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigateToComments();
          }}>
          <Text
            style={commentStyle}>{`View all ${comments.length} comments`}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  actionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  likesStyle: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 16,
    color: TextColor,
  },
  commentStyle: {
    marginVertical: 10,
    color: Grey,
  },
});

export default PostFooter;
