import { AppNavigatorRouteNames } from '../../navigation/AppNavigator/AppNavigator.routes';
import { NearEarthObjectListNavigatorRouteNames } from '../../navigation/NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import { HomeScreenNavigationProp } from './Home.interface';

export const useHomeNavigation = (
  navigation: HomeScreenNavigationProp
): {
  openPlayNearEarthObjectListScreen: () => void;
} => {
  
  const openPlayNearEarthObjectListScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.NearEarthObjectListNavigator, {
      screen: NearEarthObjectListNavigatorRouteNames.NearEarthObjectListReview,
      params: {}
    });
  return { openPlayNearEarthObjectListScreen };
};
