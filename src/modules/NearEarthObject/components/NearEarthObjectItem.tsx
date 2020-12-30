import React from "react";
import { Text, Image } from "react-native";
import { NearEarthObject } from "../../NearEarthObject/types/NearEarthObject.type";
import styled from "styled-components/native";
import { colors } from "../../../core/theme/colors";
import { connect } from "react-redux";
interface NearEarthObjectitemProps extends NearEarthObject {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
  dispatch: (action: Action) => void;
  favoriteObject: NearEarthObject[];
}
interface Action {
  type: string;
  value: NearEarthObject;
}

const NearEarthObjectItem: React.FC<NearEarthObjectitemProps> = ({
  onItemIsPressed,
  favoriteObject,
  dispatch,
  ...nearEarthObject
}: NearEarthObjectitemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  let sourceImage = require("../../../../assets/ic_favorite_border.png");
  if (
    favoriteObject.findIndex(
      (item: NearEarthObject) => item.id === nearEarthObject.id
    ) !== -1
  ) {
    sourceImage = require("../../../../assets/ic_favorite.png");
  }

  const StyledTouchableOpacity = styled.TouchableOpacity`
    width: 96%;
    height: 100px;
    padding: 20px;
    marginHorizontal: 2%
    marginVertical: 2%;
    border-radius: 20px;
    backgroundColor: #3f72af;
  `;
  return (
    <StyledTouchableOpacity
      onPress={() => {
        onItemIsPressed(nearEarthObject);
      }}
    >
      <Text style={{ color: colors.white }}>{nearEarthObject.name}</Text>
      <Image source={sourceImage} style={{ width: 40, height: 40 }} />
    </StyledTouchableOpacity>
  );
};
const mapStateToProps = (state: { favoriteObject: NearEarthObject[] }) => {
  return { favoriteObject: state.favoriteObject };
};

export default connect(mapStateToProps)(NearEarthObjectItem);
