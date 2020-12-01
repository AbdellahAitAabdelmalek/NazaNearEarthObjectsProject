import {
  NearEarthObjectDetailsNavigatorRouteNames,
  NearEarthObjectDetailsNavigatorRouteParamsList,
} from '../../navigation/NearEarthObjectDetailsNavigator/NearEarthObjectDetailsNavigator.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

export type NearEarthObjectDetailsScreenNavigationProp = StackNavigationProp<NearEarthObjectDetailsNavigatorRouteParamsList, NearEarthObjectDetailsNavigatorRouteNames.NearEarthObjectDetailsReview>;

export type NearEarthObjectDetailsReviewScreenRouteProp = RouteProp<
  NearEarthObjectDetailsNavigatorRouteParamsList,
  NearEarthObjectDetailsNavigatorRouteNames.NearEarthObjectDetailsReview
>;

export type NearEarthObjectDetailsProps = {
  navigation: NearEarthObjectDetailsScreenNavigationProp;
  route: NearEarthObjectDetailsReviewScreenRouteProp;
};
