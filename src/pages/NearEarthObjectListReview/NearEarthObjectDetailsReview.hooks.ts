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
