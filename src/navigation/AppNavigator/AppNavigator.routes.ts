import {NearEarthObjectListNavigatorRouteParamsList
} from '../NearEarthObjectListNavigator/NearEarthObjectListNavigator.routes';
import { NavigatorScreenParams } from '@react-navigation/native';

export enum AppNavigatorRouteNames {
  Home = 'Home',
  NearEarthObjectListNavigator = 'NearEarthObjectListNavigator',
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  NearEarthObjectListNavigator: NavigatorScreenParams<NearEarthObjectListNavigatorRouteParamsList>;
};
