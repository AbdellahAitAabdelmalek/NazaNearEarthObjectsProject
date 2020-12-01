import { NavigatorScreenParams } from '@react-navigation/native';
import {NearEarthObjectDetailsNavigatorRouteParamsList} from '../NearEarthObjectDetailsNavigator/NearEarthObjectDetailsNavigator.routes'

export enum NearEarthObjectListNavigatorRouteNames {
  NearEarthObjectListReview = 'NearEarthObjectListPage',
  NearEarthObjectDetailsNavigator = 'NearEarthObjectDetailsNavigator',
}

export type NearEarthObjectListNavigatorRouteParamsList = {
  // pour quoi mettre les crochets ???
  [NearEarthObjectListNavigatorRouteNames.NearEarthObjectListReview]: undefined;
  [NearEarthObjectListNavigatorRouteNames.NearEarthObjectDetailsNavigator]: NavigatorScreenParams<NearEarthObjectDetailsNavigatorRouteParamsList>;
};