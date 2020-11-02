import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

//Screens
import Home from './Screens/Home';
import Chat from './Screens/Chat';
import Camera from './Screens/Camera';
import Comments from './Screens/Comments';

const Stack = createStackNavigator();

const NewsFeed = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{...TransitionPresets.SlideFromRightIOS, tabBarVisible: false}}
      />
      <Stack.Screen
        name="Comments"
        component={Comments}
        options={{...TransitionPresets.SlideFromRightIOS, tabBarVisible: false}}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          // ...TransitionPresets.SlideFromLeftIOS,
          gestureDirection: 'horizontal-inverted',
        }}
      />
    </Stack.Navigator>
  );
};

export default NewsFeed;
