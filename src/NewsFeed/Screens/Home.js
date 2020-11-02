import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Image, Alert, ActivityIndicator} from 'react-native';
import {Container, Content} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

//Common components
import CustomHeader from '../../CommonComponents/CustomHeader';

//Components
import Stories from '../Components/Stories';
import PostList from '../Components/PostList';

//Color
import {Grey, TextColor} from '../../Utils/Color';

//images
import MessengerIcon from '../../assets/messenger.png';

//APIs
import {newsFeedAPI} from '../APIs';

const NewsFeed = ({navigation}) => {
  //state
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getNewsFeed();
  }, []);

  const getNewsFeed = async () => {
    try {
      setLoader(true);

      const data = {
        token: 'SvFkPspzRU7VkH5YXrS2tw',
      };

      const result = await newsFeedAPI(data);
      setData(result);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      Alert.alert(
        '',
        error.message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  const _renderHeaderLeftComponent = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Feather name="camera" size={30} color={TextColor} />
      </TouchableOpacity>
    );
  };

  const _renderHeaderRightComponent = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Chat');
        }}>
        <Image source={MessengerIcon} style={{width: 40, height: 40}} />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader
        title={'Instagram'}
        left={_renderHeaderLeftComponent}
        right={_renderHeaderRightComponent}
      />
      <Content showsVerticalScrollIndicator={false}>
        {loader ? (
          <ActivityIndicator
            size={30}
            color={Grey}
            style={{height: 54}}
          />
        ) : (
          <>
            <Stories stories={data.stories} />
            <PostList posts={data.posts} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default NewsFeed;
