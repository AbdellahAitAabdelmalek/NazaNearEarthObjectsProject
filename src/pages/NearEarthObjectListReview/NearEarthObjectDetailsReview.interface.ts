import {
  NearEarthObjectListNavigatorRouteNames,
  NearEarthObjectListNavigatorRouteParamsList,
} from '../../navigation/NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import { StackNavigationProp } from '@react-navigation/stack';

export type NearEarthObjectListScreenNavigationProp = StackNavigationProp<NearEarthObjectListNavigatorRouteParamsList, NearEarthObjectListNavigatorRouteNames.NearEarthObjectListReview>;

export type NearEarthObjectListProps = {
  navigation: NearEarthObjectListScreenNavigationProp;
};
