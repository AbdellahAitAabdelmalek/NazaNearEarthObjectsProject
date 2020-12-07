import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from '../../navigation/AppNavigator/AppNavigator.routes';
import { StackNavigationProp } from '@react-navigation/stack';

export type HomeScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList, AppNavigatorRouteNames.Home>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};
