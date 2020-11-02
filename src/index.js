import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Colors
import {ActiveTabIconColor, InActiveTabIconColor} from './Utils/Color';

//tabs
import NewsFeed from './NewsFeed';
import Likes from './Likes';
import Post from './Post';
import Profile from './Profile';
import Search from './Search';

//load font
SimpleLineIcons.loadFont();
FontAwesome.loadFont();
Feather.loadFont();
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const Instagram = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (
      routeName === 'Camera' ||
      routeName === 'Chat' ||
      routeName === 'Comments'
    ) {
      return false;
    }

    return true;
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName={'NewsFeed'}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: ActiveTabIconColor,
          inactiveTintColor: InActiveTabIconColor,
        }}>
        <Tab.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={({route}) => ({
            tabBarVisible: getTabBarVisibility(route),
            tabBarIcon: ({color}) => {
              return <SimpleLineIcons name="home" size={30} color={color} />;
            },
          })}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({color}) => {
              return <FontAwesome name="search" size={30} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <FontAwesome
                  name="plus-square-o"
                  size={35}
                  color={color}
                  style={{paddingTop: 7}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Likes"
          component={Likes}
          options={{
            tabBarIcon: ({color}) => {
              return <FontAwesome name="heart-o" size={30} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => {
              return <Feather name="user" size={30} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Instagram;
