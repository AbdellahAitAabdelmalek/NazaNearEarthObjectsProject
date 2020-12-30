import { AppNavigatorRouteNames } from "../../navigation/AppNavigator/AppNavigator.routes";
import { NearEarthObjectListFavoritScreenNavigationProp } from "./NearEarthObjectFavoritListReview.interface";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

export const useNearEarthObjectListFavoritNavigation = (
  navigation: NearEarthObjectListFavoritScreenNavigationProp
): {
  openPlayNearEarthObjectDetailsScreen: (
    NearEarthObject: NearEarthObject
  ) => void;
} => {
  const openPlayNearEarthObjectDetailsScreen = (
    nearEarthObject: NearEarthObject
  ) =>
    navigation.navigate(AppNavigatorRouteNames.NearEarthObjectDetailsScreen, {
      NearEarthObject: nearEarthObject,
    });

  return { openPlayNearEarthObjectDetailsScreen };
};
