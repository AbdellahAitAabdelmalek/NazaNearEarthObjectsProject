import {
  EpicNavigatorRouteNames,
  EpicNavigatorRouteParamsList,
} from '../../navigation/EpicNavigator/EpicNavigator.routes';
import { StackNavigationProp } from '@react-navigation/stack';

export type EpicReviewScreenNavigationProp = StackNavigationProp<EpicNavigatorRouteParamsList, EpicNavigatorRouteNames.EpicReview>;

export type EpicReviewProps = {
  navigation: EpicReviewScreenNavigationProp;
};
