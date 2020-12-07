import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames,
} from "../../navigation/AppNavigator/AppNavigator.routes";

export type NearEarthObjectDetailsScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.NearEarthObjectDetailsNavigator
>;

export type NearEarthObjectDetailsReviewScreenRouteProp = RouteProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.NearEarthObjectDetailsNavigator
>;

export type NearEarthObjectDetailsProps = {
  navigation: NearEarthObjectDetailsScreenNavigationProp;
  route: NearEarthObjectDetailsReviewScreenRouteProp;
};
