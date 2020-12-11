import { AppNavigatorRouteNames } from "../../navigation/AppNavigator/AppNavigator.routes";
import { HomeScreenNavigationProp } from "./Home.interface";

export const useHomeNavigation = (
  navigation: HomeScreenNavigationProp
): {
  openPlayNearEarthObjectListScreen: () => void;
  openPlayEpicReviewScreen: () => void;
} => {
  const openPlayNearEarthObjectListScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.NearEarthObjectListScreen);

  const openPlayEpicReviewScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.EpicScreen);
  return { openPlayNearEarthObjectListScreen, openPlayEpicReviewScreen };
};
