import { StackNavigationProp } from "@react-navigation/stack";
import {
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames,
} from "../../navigation/AppNavigator/AppNavigator.routes";
export type EpicReviewScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList,
  AppNavigatorRouteNames.EpicNavigator
>;

export type EpicReviewProps = {
  navigation: EpicReviewScreenNavigationProp;
};
