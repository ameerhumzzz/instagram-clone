import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Image from 'react-native-image-progress';

//Components
import UserName from './UserName';

//color
import {Grey, TextColor} from '../../Utils/Color';

const Description = (props) => {
  //props
  const {
    avatar,
    description,
    userName,
    descriptionCollapse = true,
    navigateToComments,
  } = props;

  //Styles
  const {avatarStyle} = Styles;

  //useState
  const [numberOfLines, setNumberOfLines] = useState(
    descriptionCollapse ? 2 : 0,
  );

  return (
    <View style={{flexDirection: 'row'}}>
      {avatar && (
        <View style={{flex: 0.1}}>
          <Image
            source={{uri: avatar}}
            style={avatarStyle}
            indicator={ActivityIndicator}
            indicatorProps={{
              color: Grey,
            }}
          />
        </View>
      )}

      <View style={{flex: avatar ? 0.9 : 1}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          activeOpacity={1}
          onPress={() => {
            if (numberOfLines === 0 && descriptionCollapse) {
              navigateToComments();
            } else {
              setNumberOfLines(0);
            }
          }}>
          <Text numberOfLines={numberOfLines} style={{lineHeight: 20}}>
            <UserName userName={userName} />
            <Text style={{color: TextColor}}>{' ' + description}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  avatarStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
    overflow: 'hidden',
  },
});

export default Description;
