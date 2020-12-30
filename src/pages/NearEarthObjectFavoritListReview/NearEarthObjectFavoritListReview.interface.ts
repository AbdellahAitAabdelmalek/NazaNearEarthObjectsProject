import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from "../../navigation/AppNavigator/AppNavigator.routes";
import { StackNavigationProp } from "@react-navigation/stack";

export type NearEarthObjectListFavoritScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.NearEarthObjectFavoritListScreen
>;

export type NearEarthObjectListProps = {
  navigation: NearEarthObjectListFavoritScreenNavigationProp;
};
