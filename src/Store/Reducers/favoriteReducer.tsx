import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";

interface Action {
  type: string;
  value: NearEarthObject;
}
type State = {
  favoriteObject: NearEarthObject[];
};
const initialState: State = { favoriteObject: [] };

function toggleFavorite(state: State = initialState, action: Action): State {
  let nextState: State;
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const checkIfFavorite = (nearEarthObject: NearEarthObject) => {
        return nearEarthObject.id === action.value.id;
      };

      const favoriteObjectIndex = state.favoriteObject.findIndex(
        checkIfFavorite
      );

      if (favoriteObjectIndex !== -1) {
        // supprimer des favoris
        nextState = {
          ...state,
          favoriteObject: state.favoriteObject.filter(
            (item, index) => index !== favoriteObjectIndex
          ),
        };
      } else {
        nextState = {
          ...state,
          favoriteObject: [...state.favoriteObject, action.value],
        };
      }
      return nextState || state;
    }
    default:
      return state;
  }
}

export default toggleFavorite;
