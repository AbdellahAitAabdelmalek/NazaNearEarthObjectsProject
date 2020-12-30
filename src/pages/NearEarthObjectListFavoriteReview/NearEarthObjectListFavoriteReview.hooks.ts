import { AppNavigatorRouteNames } from "../../navigation/AppNavigator/AppNavigator.routes";
import { NearEarthObjectListFavoriteScreenNavigationProp } from "./NearEarthObjectListFavoriteReview.interface";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

export const useNearEarthObjectListFavoriteNavigation = (
  navigation: NearEarthObjectListFavoriteScreenNavigationProp
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
