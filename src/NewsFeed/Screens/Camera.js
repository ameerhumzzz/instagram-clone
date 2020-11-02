import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Common components
import CustomHeader from '../../CommonComponents/CustomHeader';
import ComingSoon from '../../CommonComponents/ComingSoon';

//Color
import {TextColor} from '../../Utils/Color';

const Camera = ({navigation}) => {
  const _renderHeaderRightComponent = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="ios-chevron-forward" size={30} color={TextColor} />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <CustomHeader title={'Camera'} right={_renderHeaderRightComponent} />
      <Content showsVerticalScrollIndicator={false}>
        <ComingSoon />
      </Content>
    </Container>
  );
};

export default Camera;
