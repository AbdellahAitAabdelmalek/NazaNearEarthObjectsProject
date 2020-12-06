import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';
import { EpicReview } from '../../pages/EpicReview/EpicReview.page';
import { EpicNavigatorRouteNames, EpicNavigatorRouteParamsList } from './EpicNavigator.routes';

import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator<EpicNavigatorRouteParamsList>();

export const EpicNavigator: FunctionComponent = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Stack.Navigator 
      initialRouteName={EpicNavigatorRouteNames.EpicReview}
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
        name={EpicNavigatorRouteNames.EpicReview} 
        component={EpicReview} 
        options={{ headerTitle: 'Welcome to Naza Project' }}/>
    </Stack.Navigator>
  </>
  
);
