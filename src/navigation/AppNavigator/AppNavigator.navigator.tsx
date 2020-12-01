import { NearEarthObjectListNavigator } from '../NearEarthObjectListNavigator/NearEarthObjectListNavigator.navigator';
import { Home } from '../../pages/Home/Home.page';
import { AppNavigatorRouteNames, AppNavigatorRouteParamsList } from './AppNavigator.routes';

import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const homeStack = createStackNavigator<AppNavigatorRouteParamsList>();

export const AppNavigator: FunctionComponent = () => (
  <NavigationContainer>
    {/* <StatusBar barStyle="light-content" /> */}
    <homeStack.Navigator initialRouteName={AppNavigatorRouteNames.Home}>
      <homeStack.Screen 
        name={AppNavigatorRouteNames.NearEarthObjectListNavigator} 
        component={NearEarthObjectListNavigator}/>
      <homeStack.Screen 
        name={AppNavigatorRouteNames.Home} 
        component={Home} 
        options={{ headerTitle: 'Welcome to Naza Project' }}/>
    </homeStack.Navigator>
  </NavigationContainer>
  
);
