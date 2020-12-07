import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

export enum AppNavigatorRouteNames {
  Home = "Home",
  EpicNavigator = "EpicNavigator",
  NearEarthObjectListNavigator = "NearEarthObjectListNavigator",
  NearEarthObjectDetailsNavigator = "NearEarthObjectDetailsNavigator",
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  EpicNavigator: undefined;
  NearEarthObjectListNavigator: undefined;
  NearEarthObjectDetailsNavigator: { NearEarthObject: NearEarthObject };
};
