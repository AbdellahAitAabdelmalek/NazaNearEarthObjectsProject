import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';
import {
  NearEarthObjectDetailsNavigatorRouteNames,
  NearEarthObjectDetailsNavigatorRouteParamsList,}
    from './NearEarthObjectDetailsNavigator.routes';
import { NearEarthObjectDetailsReview } 
  from '../../pages/NearEarthObjectDetailsReview/NearEarthObjectDetailsReview.page';


const Stack = createStackNavigator<NearEarthObjectDetailsNavigatorRouteParamsList>();

export const NearEarthObjectDetailsNavigator: FunctionComponent = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: colors.raisinBlack,
      shadowColor: colors.black,
    },
    headerTintColor: colors.ivory,
    headerTitleStyle: {
      fontFamily: theme.fontFamilies.bold,
      fontSize: theme.fontSizes.xxl,
    },
    headerBackTitleStyle: {
      fontFamily: theme.fontFamilies.bold,
      fontSize: theme.fontSizes.xl,
    },
    cardStyle: { backgroundColor: theme.colors.darkGrey },
  }}>
    <Stack.Screen 
        name={NearEarthObjectDetailsNavigatorRouteNames.NearEarthObjectDetailsReview} 
        component={NearEarthObjectDetailsReview} 
        options={({ route }) => ({ headerTitle: route.params.NearEarthObject.name })}/>
  </Stack.Navigator>
);

  