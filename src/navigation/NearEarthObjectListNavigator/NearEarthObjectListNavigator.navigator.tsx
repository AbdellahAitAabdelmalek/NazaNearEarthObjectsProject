import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';

import { NearEarthObjectListReview } 
  from '../../pages/NearEarthObjectListReview/NearEarthObjectListReview.page';
import { NearEarthObjectDetailsNavigator } 
  from '../NearEarthObjectDetailsNavigator/NearEarthObjectDetailsNavigator.navigator';
import {
  NearEarthObjectListNavigatorRouteNames,
  NearEarthObjectListNavigatorRouteParamsList,
} from './NearEarthObjectListNavigator.routes';

import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';

const Stack = createStackNavigator<NearEarthObjectListNavigatorRouteParamsList>();

export const NearEarthObjectListNavigator: FunctionComponent = () => (
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
        name={NearEarthObjectListNavigatorRouteNames.NearEarthObjectDetailsNavigator} 
        component={NearEarthObjectDetailsNavigator}
        options={{ headerShown: false }} />
    <Stack.Screen 
        name={NearEarthObjectListNavigatorRouteNames.NearEarthObjectListReview} 
        component={NearEarthObjectListReview} 
        options={{ headerTitle: 'Liste Of Near Earth Objects' }}/>
  </Stack.Navigator>
);

  