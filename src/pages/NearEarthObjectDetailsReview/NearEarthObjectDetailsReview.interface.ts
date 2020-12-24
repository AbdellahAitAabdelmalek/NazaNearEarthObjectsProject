import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import {
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames,
} from "../../navigation/AppNavigator/AppNavigator.routes";

export type NearEarthObjectDetailsScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.NearEarthObjectDetailsScreen
>;

export type NearEarthObjectDetailsReviewScreenRouteProp = RouteProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.NearEarthObjectDetailsScreen
>;

export type NearEarthObjectDetailsProps = {
  navigation: NearEarthObjectDetailsScreenNavigationProp;
  route: NearEarthObjectDetailsReviewScreenRouteProp;
  dispatch: (action: Action) => void;
  favoriteObject: string[];
};

export interface Action {
  type: string;
  value: string;
}