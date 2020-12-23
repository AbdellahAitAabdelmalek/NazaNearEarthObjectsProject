import React from "react";
import { useReducer } from "react";

interface Action {
  type: string;
  payload: string | Date;
}
type Dispatch = (action: Action) => void;
type State = {
  date: Date;
  mode: string;
};

const appReducer = (
  state: { date: Date; mode: string },
  action: Action
): State => {
  switch (action.type) {
    case "changeDate":
      if (typeof action.payload !== "string") state.date = action.payload;
      return { ...state };
    case "changeMode":
      if (typeof action.payload === "string") state.mode = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export const StateContext = React.createContext<State | undefined>({
  date: new Date(),
  mode: "enhanced",
});

export const DispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

export function ContextProvider({ children }: any) {
  const [states, dispatch] = useReducer(appReducer, {
    date: new Date(),
    mode: "enhanced",
  });
  return (
    <StateContext.Provider value={states}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useEpicReviewNavigation = (): // navigation: EpicReviewScreenNavigationProp
{
  openPlayEpicReviewScreen: () => void;
} => {
  const openPlayEpicReviewScreen = () => {
    return;
  };

  return { openPlayEpicReviewScreen };
};
