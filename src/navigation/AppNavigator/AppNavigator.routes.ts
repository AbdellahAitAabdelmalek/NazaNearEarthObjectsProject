import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

export enum AppNavigatorRouteNames {
  Home = "Home",
  EpicScreen = "EpicScreen",
  NearEarthObjectListScreen = "NearEarthObjectListScreen",
  NearEarthObjectFavoriteListScreen = "NearEarthObjectFavoriteListScreen",
  NearEarthObjectDetailsScreen = "NearEarthObjectDetailsScreen",
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  EpicScreen: undefined;
  NearEarthObjectListScreen: undefined;
  NearEarthObjectFavoriteListScreen: undefined;
  NearEarthObjectDetailsScreen: { NearEarthObject: NearEarthObject };
};
