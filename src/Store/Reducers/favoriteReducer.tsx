interface Action {
  type: string;
  value: string;
}
type State = {
  favoriteObject: string[];
};
const initialState: State = { favoriteObject: [] };

function toggleFavorite(state: State = initialState, action: Action): State {
  let nextState: State;
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const favoriteObjectIndex: number = state.favoriteObject.indexOf(
        action.value
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
