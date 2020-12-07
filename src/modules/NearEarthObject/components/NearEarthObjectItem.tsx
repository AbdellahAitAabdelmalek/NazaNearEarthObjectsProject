import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { NearEarthObject } from '../../NearEarthObject/types/NearEarthObject.type';
import { colors } from '../../../core/theme/colors';
import styled from 'styled-components/native';
interface NearEarthObjectitemProps extends NearEarthObject{
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

export const NearEarthObjectItem: React.FC <NearEarthObjectitemProps> = ({onItemIsPressed, ...NearEarthObject})=> {
  const [selectedId, setSelectedId] = useState<number | null> (null);

  const StyledTouchableOpacity = styled.TouchableOpacity`
    width: 96%;
    height: 100px;
    padding: 20px;
    marginHorizontal: 2%
    marginVertical: 2%;
    border-radius: 20px;
    backgroundColor: #3f72af;
  `;
  const backgroundColor = NearEarthObject.id === selectedId ? colors.lightBlue : colors.mediumBlue;
    return (
      <StyledTouchableOpacity onPress={()=>{
            setSelectedId(NearEarthObject.id);
            onItemIsPressed(NearEarthObject)}}>
        <Text>{NearEarthObject.name}</Text>
      </StyledTouchableOpacity>);
  }
