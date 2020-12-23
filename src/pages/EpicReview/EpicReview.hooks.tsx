import React from "react";
import { useReducer } from "react";

interface Action {
  type: string;
  payload: string | Date;
}
type Dispatch = (action: Action) => void;
type States = {
  date: Date;
  mode: string;
};

const appReducer = (
  states: { date: Date; mode: string },
  action: Action
): States => {
  switch (action.type) {
    case "changeDate":
      if (typeof action.payload !== "string") states.date = action.payload;
      return { ...states };
    case "changeMode":
      if (typeof action.payload === "string") states.mode = action.payload;
      return { ...states };
    default:
      return { ...states };
  }
};

export const StateContext = React.createContext<States | undefined>({
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
