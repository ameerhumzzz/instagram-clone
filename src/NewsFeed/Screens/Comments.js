import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Text,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {Container, Content, Footer} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Image from 'react-native-image-progress';

//Common components
import CustomHeader from '../../CommonComponents/CustomHeader';

//Components
import Description from '../Components/Description';
import Comment from '../Components/Comment';

//Color
import {TextColor, BorderColor, Primary, Grey} from '../../Utils/Color';

//static profile piv and use name beacuse there is no auth is this app
const ProfilePic =
  'https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/6e37e1c924aa55072f25e47ede573285a6fb69bf.png?alt=media&token=ae4e9186-91b8-4748-963a-02138a3e395c';
const userName = 'Andrea Schmidt';

const Comments = ({navigation, route}) => {
  //props
  const {userName, description, comments, avatar} = route.params.data;

  //state
  const [commentList, setCommentList] = useState(comments);
  const [comment, setComment] = useState('');

  //style
  const {
    profilePicStyle,
    footerView,
    textInputViewStyle,
    postStyle,
    descriptionView,
  } = Styles;

  const _renderHeaderLeftComponent = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="ios-chevron-back" size={30} color={TextColor} />
      </TouchableOpacity>
    );
  };

  const _renderHeaderRightComponent = () => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => {}}>
        <Feather name="send" size={24} color={TextColor} />
      </TouchableOpacity>
    );
  };

  const postComment = () => {
    let comments = [];
    if (commentList && commentList.length !== 0) {
      comments = [...commentList];
    }

    comments.push({
      id: commentList ? commentList.length + 1 : 0, // generating id here because comments are not going in DB
      comment: comment,
      likes: 0,
      userName: userName,
      avatar: ProfilePic,
    });

    Keyboard.dismiss();
    setComment('');
    setCommentList(comments);
  };

  return (
    <Container>
      <CustomHeader
        title={'Comments'}
        left={_renderHeaderLeftComponent}
        right={_renderHeaderRightComponent}
      />
      <Content
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10, marginHorizontal: 10}}>
        {description && description.length != 0 && (
          <View style={descriptionView}>
            <Description
              userName={userName}
              avatar={avatar}
              description={description}
              descriptionCollapse={false}
            />
          </View>
        )}

        <FlatList
          data={commentList}
          keyExtractor={(comment) => comment.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <Comment comment={item} />;
          }}
        />
      </Content>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <Footer style={{backgroundColor: '#ffffff'}}>
          <View style={footerView}>
            <Image
              source={{uri: ProfilePic}}
              style={profilePicStyle}
              indicator={ActivityIndicator}
              indicatorProps={{
                color: Grey,
              }}
            />
            <View style={textInputViewStyle}>
              <TextInput
                style={{flex: 1, height: Platform.OS === 'ios' ? 25 : 40}}
                multiline
                onChangeText={(text) => setComment(text)}
                value={comment}
                placeholder={'Add a comment'}
              />
              {comment.length !== 0 && (
                <TouchableOpacity onPress={postComment}>
                  <Text style={postStyle}>Post</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
};

const Styles = StyleSheet.create({
  profilePicStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 5,
  },
  textInputViewStyle: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: BorderColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postStyle: {
    color: Primary,
    fontWeight: '500',
  },
  descriptionView: {
    borderBottomWidth: 1,
    borderColor: BorderColor,
    marginBottom: 5,
    paddingBottom: 5,
  },
});

export default Comments;
