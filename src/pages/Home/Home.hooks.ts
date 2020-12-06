import { AppNavigatorRouteNames } from '../../navigation/AppNavigator/AppNavigator.routes';
import { EpicNavigatorRouteNames } from '../../navigation/EpicNavigator/EpicNavigator.routes';
import { NearEarthObjectListNavigatorRouteNames } from '../../navigation/NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import { HomeScreenNavigationProp } from './Home.interface';

export const useHomeNavigation = (
  navigation: HomeScreenNavigationProp
): {
  openPlayNearEarthObjectListScreen: () => void;
  openPlayEpicReviewScreen: () => void;
} => {
  
  const openPlayNearEarthObjectListScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.NearEarthObjectListNavigator, {
      screen: NearEarthObjectListNavigatorRouteNames.NearEarthObjectListReview,
    });

  const openPlayEpicReviewScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.EpicNavigator, {
      screen: EpicNavigatorRouteNames.EpicReview,
    });
  return { openPlayNearEarthObjectListScreen , openPlayEpicReviewScreen};
};
