// import {NearEarthObjectListNavigatorRouteParamsList
// } from '../NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import { NavigatorScreenParams } from '@react-navigation/native';

export enum EpicNavigatorRouteNames {
  EpicReview = 'EpicReviewPage',
  // NearEarthObjectListNavigator = 'NearEarthObjectListNavigator',
}

export type EpicNavigatorRouteParamsList = {
  [EpicNavigatorRouteNames.EpicReview]: undefined;
  // NearEarthObjectListNavigator: NavigatorScreenParams<NearEarthObjectListNavigatorRouteParamsList>;
};
