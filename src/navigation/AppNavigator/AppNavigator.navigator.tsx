import { theme } from "../../core/theme";
import { colors } from "../../core/theme/colors";

import { Home } from "../../pages/Home/Home.page";
import NearEarthObjectDetailsReview from "../../pages/NearEarthObjectDetailsReview/NearEarthObjectDetailsReview.page";
import { NearEarthObjectListReview } from "../../pages/NearEarthObjectListReview/NearEarthObjectListReview.page";
import { NearEarthObjectFavoriteListReview } from "../../pages/NearEarthObjectListFavoriteReview/NearEarthObjectListFavoriteReview.page";
import { EpicReview } from "../../pages/EpicReview/EpicReview.page";

import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from "./AppNavigator.routes";

import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const NeoListsTabNavigator = createBottomTabNavigator();
const NeoListsNavigator: FunctionComponent = () => (
  <NeoListsTabNavigator.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.ivory,
      inactiveBackgroundColor: colors.white,
      showLabel: false,
    }}
    initialRouteName={AppNavigatorRouteNames.Home}
  >
    <NeoListsTabNavigator.Screen
      name={AppNavigatorRouteNames.NearEarthObjectListScreen}
      component={NearEarthObjectListReview}
      options={{
        // eslint-disable-next-line react/display-name
        tabBarIcon: () => {
          return (
            <Image
              source={require("../../../assets/ic_search.png")}
              style={{ width: 50, height: 50 }}
            />
          );
        },
      }}
    />

    <NeoListsTabNavigator.Screen
      name={AppNavigatorRouteNames.NearEarthObjectFavoriteListScreen}
      component={NearEarthObjectFavoriteListReview}
      options={{
        // eslint-disable-next-line react/display-name
        tabBarIcon: () => {
          return (
            <Image
              source={require("../../../assets/ic_favorite.png")}
              style={{ width: 50, height: 50 }}
            />
          );
        },
      }}
    />
  </NeoListsTabNavigator.Navigator>
);

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
        component={NeoListsNavigator}
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

const NeoStack = createStackNavigator<AppNavigatorRouteParamsList>();
const NeoNavigator: FunctionComponent = () => (
  <NeoStack.Navigator
    initialRouteName={AppNavigatorRouteNames.NearEarthObjectListScreen}
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
    <NeoStack.Screen
      name={AppNavigatorRouteNames.NearEarthObjectListScreen}
      component={NearEarthObjectListReview}
      options={{ headerShown: true }}
    />
    <NeoStack.Screen
      name={AppNavigatorRouteNames.NearEarthObjectDetailsScreen}
      component={NearEarthObjectDetailsReview}
      options={({ route }) => ({
        headerTitle: route.params.NearEarthObject.name,
      })}
    />
  </NeoStack.Navigator>
);

const tabNavigator = createBottomTabNavigator();
export const AppNavigator2: FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content' />
    <tabNavigator.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.ivory,
        inactiveBackgroundColor: colors.white,
        showLabel: false,
      }}
      initialRouteName={AppNavigatorRouteNames.Home}
    >
      <tabNavigator.Screen
        name={AppNavigatorRouteNames.Home}
        component={Home}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <Image
                source={require("../../../assets/ic_favorite.png")}
                style={{ width: 50, height: 50 }}
              />
            );
          },
        }}
      />

      <tabNavigator.Screen
        name={AppNavigatorRouteNames.EpicScreen}
        component={EpicReview}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <Image
                source={require("../../../assets/icon.png")}
                style={{ width: 50, height: 50 }}
              />
            );
          },
        }}
      />
      <tabNavigator.Screen
        name={AppNavigatorRouteNames.NearEarthObjectListScreen}
        component={NeoNavigator}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => {
            return (
              <Image
                source={require("../../../assets/ic_favorite_border.png")}
                style={{ width: 50, height: 50 }}
              />
            );
          },
        }}
      />
    </tabNavigator.Navigator>
  </NavigationContainer>
);
