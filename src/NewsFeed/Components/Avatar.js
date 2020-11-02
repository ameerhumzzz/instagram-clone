import React, {useState} from 'react';
import {View, ActivityIndicator, StyleSheet,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

//Component
import AngularGradient from './AngularGradient';

//Color
import {InActiveTabIconColor, Primary} from '../../Utils/Color';

const Avatar = (props) => {
  //props
  const {picture, mine, stories} = props;

  //state
  const [loader, setLoader] = useState(true);

  //Styles
  const {imageStyle, addButtonStyle} = Styles;

  return (
    <View>
      {loader ? (
        <ActivityIndicator
          size={30}
          color={InActiveTabIconColor}
          style={{height: 54}}
        />
      ) : stories ? (
        <AngularGradient size={54} colors={['#DA0569', '#4E58CF']} />
      ) : (
        <View style={{width: 54, height: 54}} />
      )}

      <Image
        source={{uri: picture}}
        style={imageStyle}
        indicator={ActivityIndicator}
        onLoadEnd={() => {
          setLoader(false);
        }}
      />

      {mine && (
        <View style={addButtonStyle}>
          <Feather name="plus" size={16} color="white" />
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 2,
    left: 2,
  },
  addButtonStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: Primary,
  },
});

export default Avatar;
