import {
 AppNavigatorRouteNames,
 AppNavigatorRouteParamsList,
} from '../../navigation/AppNavigator/AppNavigator.routes';
import { StackNavigationProp } from '@react-navigation/stack';

export type NearEarthObjectListScreenNavigationProp = StackNavigationProp<
  AppNavigatorRouteParamsList, AppNavigatorRouteNames.NearEarthObjectListNavigator>;

export type NearEarthObjectListProps = {
  navigation: NearEarthObjectListScreenNavigationProp;
};
