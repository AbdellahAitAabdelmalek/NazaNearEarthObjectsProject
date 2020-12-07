import { AppNavigatorRouteNames } from '../../navigation/AppNavigator/AppNavigator.routes';
import { HomeScreenNavigationProp } from './Home.interface';


export const useHomeNavigation = (
  navigation: HomeScreenNavigationProp
): {
  openPlayNearEarthObjectListScreen: () => void;
  openPlayEpicReviewScreen: () => void;
} => {
  
  const openPlayNearEarthObjectListScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.NearEarthObjectListNavigator);

  const openPlayEpicReviewScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.EpicNavigator);
  return { openPlayNearEarthObjectListScreen , openPlayEpicReviewScreen};
};
