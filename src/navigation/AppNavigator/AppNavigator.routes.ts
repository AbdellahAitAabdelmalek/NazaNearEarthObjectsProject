import {NearEarthObjectListNavigatorRouteParamsList
} from '../NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { EpicNavigatorRouteParamsList } from '../EpicNavigator/EpicNavigator.routes'

export enum AppNavigatorRouteNames {
  Home = 'Home',
  NearEarthObjectListNavigator = 'NearEarthObjectListNavigator',
  EpicNavigator = 'EpicNavigator',
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  NearEarthObjectListNavigator: NavigatorScreenParams<NearEarthObjectListNavigatorRouteParamsList>;
  EpicNavigator: NavigatorScreenParams<EpicNavigatorRouteParamsList>;
};
