import React from "react";
import { Text } from "react-native";
import { NearEarthObject } from "../../NearEarthObject/types/NearEarthObject.type";
import styled from "styled-components/native";
interface NearEarthObjectitemProps extends NearEarthObject {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

export const NearEarthObjectItem: React.FC<NearEarthObjectitemProps> = ({
  onItemIsPressed,
  ...nearEarthObject
}: NearEarthObjectitemProps) => {
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
      <Text>{nearEarthObject.name}</Text>
    </StyledTouchableOpacity>
  );
};
