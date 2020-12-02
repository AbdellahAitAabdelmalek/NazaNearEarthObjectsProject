import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';
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
    <homeStack.Navigator 
      initialRouteName={AppNavigatorRouteNames.Home}
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
      
      
      <homeStack.Screen 
        name={AppNavigatorRouteNames.NearEarthObjectListNavigator} 
        component={NearEarthObjectListNavigator}
        options={{ headerShown: false }}/>
      <homeStack.Screen 
        name={AppNavigatorRouteNames.Home} 
        component={Home} 
        options={{ headerTitle: 'Welcome to Naza Project' }}/>
    </homeStack.Navigator>
  </NavigationContainer>
  
);
