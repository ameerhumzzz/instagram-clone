import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Common components
import CustomHeader from '../../CommonComponents/CustomHeader';
import ComingSoon from '../../CommonComponents/ComingSoon';

//Color
import {TextColor} from '../../Utils/Color';

const Chat = ({navigation}) => {
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

  return (
    <Container>
      <CustomHeader title={'Comments'} left={_renderHeaderLeftComponent} />
      <Content showsVerticalScrollIndicator={false}>
        <ComingSoon />
      </Content>
    </Container>
  );
};

export default Chat;
