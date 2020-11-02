import React from 'react';
import {FlatList} from 'react-native';

//Compoments
import Story from './Story';

//Color
import {BorderColor} from '../../Utils/Color';

const Stories = ({stories}) => {
  return (
    <FlatList
      style={{borderBottomWidth: 1, borderColor: BorderColor}}
      data={stories}
      keyExtractor={(story) => story.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        return <Story story={item} mine={index === 0} />;
      }}
    />
  );
};

export default Stories;
