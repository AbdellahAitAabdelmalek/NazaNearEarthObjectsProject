import { NearEarthObjectListReview } from '../../pages/NearEarthObjectListReview/NearEarthObjectListReview.page';
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
  <Stack.Navigator>
    <Stack.Screen 
        name={NearEarthObjectListNavigatorRouteNames.NearEarthObjectDetailsNavigator} 
        component={NearEarthObjectDetailsNavigator} />
    <Stack.Screen 
        name={NearEarthObjectListNavigatorRouteNames.NearEarthObjectListReview} 
        component={NearEarthObjectListReview} 
        options={{ headerTitle: '' }}/>
  </Stack.Navigator>
);

  