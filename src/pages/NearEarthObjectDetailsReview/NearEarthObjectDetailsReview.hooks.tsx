import React from "react";
import { Image } from "react-native";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import { NearEarthObjectDetailsProps } from "./NearEarthObjectDetailsReview.interface";

export const useNearEarthObjectDetailsStates = (
  props: NearEarthObjectDetailsProps
): {
  toggleFavorite: () => void;
  displayFavoriteImage: () => JSX.Element;
  nearEarthObject: NearEarthObject;
} => {
  const nearEarthObject: NearEarthObject | undefined =
    props.route.params?.NearEarthObject;

  const toggleFavorite = () => {
    const action = { type: "TOGGLE_FAVORITE", value: nearEarthObject };
    props.dispatch(action);
  };

  const displayFavoriteImage = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let sourceImage = require("../../../assets/ic_favorite_border.png");

    if (
      props.favoriteObject.findIndex(
        (item: NearEarthObject) => item.id === nearEarthObject.id
      ) !== -1
    ) {
      sourceImage = require("../../../assets/ic_favorite.png");
    }
    return <Image source={sourceImage} style={{ width: 40, height: 40 }} />;
  };

  return { nearEarthObject, toggleFavorite, displayFavoriteImage };
};
