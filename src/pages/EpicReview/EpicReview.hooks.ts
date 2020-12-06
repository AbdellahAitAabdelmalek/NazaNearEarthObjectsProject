import { EpicNavigatorRouteNames } from '../../navigation/EpicNavigator/EpicNavigator.routes';
// import { EpicReviewRouteNames } from '../../navigation/EpicReview/EpicReview.routes';
import { EpicReviewScreenNavigationProp } from './EpicReview.interface';

export const useEpicReviewNavigation = (
  navigation: EpicReviewScreenNavigationProp
): {
  openPlayEpicReviewScreen: () => void;
} => {
  
  const openPlayEpicReviewScreen = () =>{}
    
  return { openPlayEpicReviewScreen };
};
