import {
  NearEarthObjectDetailsNavigatorRouteNames,
  NearEarthObjectDetailsNavigatorRouteParamsList,
} from './NearEarthObjectDetailsNavigator.routes';
import { NearEarthObjectDetailsReview } from '../../pages/NearEarthObjectDetailsReview/NearEarthObjectDetailsReview.page';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';

const Stack = createStackNavigator<NearEarthObjectDetailsNavigatorRouteParamsList>();

export const NearEarthObjectDetailsNavigator: FunctionComponent = () => (
  <Stack.Navigator>
    <Stack.Screen 
        name={NearEarthObjectDetailsNavigatorRouteNames.NearEarthObjectDetailsReview} 
        component={NearEarthObjectDetailsReview} 
        options={{ headerTitle: 'List of Near Earth Objects : ' }}/>
  </Stack.Navigator>
);

  