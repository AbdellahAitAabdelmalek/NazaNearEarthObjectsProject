
import { EpicReviewScreenNavigationProp } from './EpicReview.interface';

export const useEpicReviewNavigation = (
  navigation: EpicReviewScreenNavigationProp
): {
  openPlayEpicReviewScreen: () => void;
} => {
  
  const openPlayEpicReviewScreen = () =>{}
    
  return { openPlayEpicReviewScreen };
};
