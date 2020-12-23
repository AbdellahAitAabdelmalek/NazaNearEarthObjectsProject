import { theme } from "../../core/theme";
import { colors } from "../../core/theme/colors";

import { Home } from "../../pages/Home/Home.page";
import NearEarthObjectDetailsReview from "../../pages/NearEarthObjectDetailsReview/NearEarthObjectDetailsReview.page";
import { NearEarthObjectListReview } from "../../pages/NearEarthObjectListReview/NearEarthObjectListReview.page";
import { EpicReview } from "../../pages/EpicReview/EpicReview.page";

import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from "./AppNavigator.routes";

import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

const homeStack = createStackNavigator<AppNavigatorRouteParamsList>();

export const AppNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content' />
    <homeStack.Navigator
      initialRouteName={AppNavigatorRouteNames.Home}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.raisinBlack,
          shadowColor: colors.black,
        },
        headerTintColor: colors.ivory,
        headerTitleStyle: {
          fontSize: theme.fontSizes.xxl,
        },
        headerBackTitleStyle: {
          fontSize: theme.fontSizes.xl,
        },
        cardStyle: { backgroundColor: theme.colors.darkGrey },
      }}
    >
      <homeStack.Screen
        name={AppNavigatorRouteNames.Home}
        component={Home}
        options={{ headerTitle: "Welcome to Naza Project" }}
      />
      <homeStack.Screen
        name={AppNavigatorRouteNames.EpicScreen}
        component={EpicReview}
        options={{ headerShown: true }}
      />
      <homeStack.Screen
        name={AppNavigatorRouteNames.NearEarthObjectListScreen}
        component={NearEarthObjectListReview}
        options={{ headerShown: true }}
      />
      <homeStack.Screen
        name={AppNavigatorRouteNames.NearEarthObjectDetailsScreen}
        component={NearEarthObjectDetailsReview}
        options={({ route }) => ({
          headerTitle: route.params.NearEarthObject.name,
        })}
      />
    </homeStack.Navigator>
  </NavigationContainer>
);
