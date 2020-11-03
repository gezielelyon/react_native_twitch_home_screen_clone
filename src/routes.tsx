import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import Following from './Pages/Following/index';
import ComingSoon from './Pages/ComingSoon/index';

import colors from './styles/colors';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'roboto_400',
          fontSize: 11,
          marginTop: 5
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple
      }}
    >
      <Screen name="Following" component={Following} options={{
        tabBarIcon: ({size, focused}) => (
          <Ionicons name="md-heart" size={size} color={focused? colors.purple : colors.black} />
        ),
      }} />
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: ({size, focused}) => (
          <MaterialCommunityIcons name="compass-outline" size={size} color={focused? colors.purple : colors.black} />
        ),
      }} />
      <Screen name="Browse" component={ComingSoon} options={{
        tabBarIcon: ({size, focused}) => (
          <Ionicons name="md-browsers" size={size} color={focused? colors.purple : colors.black} />
        ),
      }} />
      <Screen name="Esports" component={ComingSoon} options={{
        tabBarIcon: ({size, focused}) => (
          <MaterialCommunityIcons name="trophy-outline" size={size} color={focused? colors.purple : colors.black} />
        ),
      }} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
