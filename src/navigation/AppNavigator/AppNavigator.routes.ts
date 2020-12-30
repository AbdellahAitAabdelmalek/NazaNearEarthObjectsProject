import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

export enum AppNavigatorRouteNames {
  Home = "Home",
  EpicScreen = "EpicScreen",
  NearEarthObjectListScreen = "NearEarthObjectListScreen",
  NearEarthObjectFavoritListScreen = "NearEarthObjectFavoritListScreen",
  NearEarthObjectDetailsScreen = "NearEarthObjectDetailsScreen",
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  EpicScreen: undefined;
  NearEarthObjectListScreen: undefined;
  NearEarthObjectFavoritListScreen: undefined;
  NearEarthObjectDetailsScreen: { NearEarthObject: NearEarthObject };
};
