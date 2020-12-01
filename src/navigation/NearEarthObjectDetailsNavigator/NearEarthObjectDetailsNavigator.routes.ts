import { NavigatorScreenParams } from '@react-navigation/native';
import { NearEarthObject } from '../../modules/NearEarthObject/types/NearEarthObject.type';
export enum NearEarthObjectDetailsNavigatorRouteNames {
  NearEarthObjectDetailsReview = 'NearEarthObjectDetailsPage',
}

export type NearEarthObjectDetailsNavigatorRouteParamsList = {
  [NearEarthObjectDetailsNavigatorRouteNames.NearEarthObjectDetailsReview]: { NearEarthObject: NearEarthObject };
};