import { NearEarthObjectListScreenNavigationProp } from './NearEarthObjectDetailsReview.interface';
import {
  NearEarthObjectListNavigatorRouteNames,
  NearEarthObjectListNavigatorRouteParamsList,
} from '../../navigation/NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import {
  NearEarthObjectDetailsNavigatorRouteNames,
  NearEarthObjectDetailsNavigatorRouteParamsList,
} from '../../navigation/NearEarthObjectDetailsNavigator/NearEarthObjectDetailsNavigator.routes';
import { NearEarthObject } from '../../modules/NearEarthObject/types/NearEarthObject.type';
import axios from 'axios';
const url = 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw'

export const useNearEarthObjectListNavigation = (
  navigation: NearEarthObjectListScreenNavigationProp
): {
  openPlayNearEarthObjectDetailsScreen: (NearEarthObject: NearEarthObject) => void;

} => {
 
  const openPlayNearEarthObjectDetailsScreen = (NearEarthObject: NearEarthObject) =>
    navigation.navigate(NearEarthObjectListNavigatorRouteNames.NearEarthObjectDetailsNavigator, {
      screen: NearEarthObjectDetailsNavigatorRouteNames.NearEarthObjectDetailsReview,
      params: { NearEarthObject }
    });
  
  return { openPlayNearEarthObjectDetailsScreen };
};
