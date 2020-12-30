import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from "../../navigation/AppNavigator/AppNavigator.routes";
import { StackNavigationProp } from "@react-navigation/stack";

export type NearEarthObjectListFavoriteScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.NearEarthObjectFavoriteListScreen
>;

export type NearEarthObjectListProps = {
  navigation: NearEarthObjectListFavoriteScreenNavigationProp;
};
