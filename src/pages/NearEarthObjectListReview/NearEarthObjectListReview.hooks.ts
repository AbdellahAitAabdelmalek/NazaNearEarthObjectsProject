import { AppNavigatorRouteNames } from "../../navigation/AppNavigator/AppNavigator.routes";
import { NearEarthObjectListScreenNavigationProp } from "./NearEarthObjectListReview.interface";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

export const useNearEarthObjectListNavigation = (
  navigation: NearEarthObjectListScreenNavigationProp
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
