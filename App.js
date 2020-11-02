import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Instagram from './src';

const App = () => {
  console.log('hello');
  return (
    <NavigationContainer>
      <Instagram />
    </NavigationContainer>
  );
};

export default App;
