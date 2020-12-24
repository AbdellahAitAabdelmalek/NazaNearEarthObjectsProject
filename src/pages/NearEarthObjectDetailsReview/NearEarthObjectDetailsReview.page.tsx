import React, { FunctionComponent } from "react";
import { NearEarthObjectDetailsProps } from "./NearEarthObjectDetailsReview.interface";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNearEarthObjectDetailsStates } from "./NearEarthObjectDetailsReview.hooks";

const NearEarthObjectDetailsReview: FunctionComponent<NearEarthObjectDetailsProps> = (
  props: NearEarthObjectDetailsProps
) => {
  const {
    nearEarthObject,
    toggleFavorite,
    displayFavoriteImage,
  } = useNearEarthObjectDetailsStates(props);

  return (
    <>
      <TouchableOpacity onPress={() => toggleFavorite()}>
        {displayFavoriteImage()}
      </TouchableOpacity>
      <Button title='Favorite' onPress={() => toggleFavorite()}></Button>
      <CustomText>id = {nearEarthObject.id}</CustomText>
      <CustomText>name = {nearEarthObject.name}</CustomText>
      <CustomText>name_limited = {nearEarthObject.name_limited}</CustomText>
      <CustomText>
        absolute_magnitude_h = {nearEarthObject.absolute_magnitude_h}
      </CustomText>
      <CustomText>designation = {nearEarthObject.designation}</CustomText>
      <CustomText>
        is_potentially_hazardous_asteroid ={" "}
        {nearEarthObject.is_potentially_hazardous_asteroid}
      </CustomText>
      <CustomText>
        is_sentry_object = {nearEarthObject.is_sentry_object}
      </CustomText>
      <CustomText>nasa_jpl_url = {nearEarthObject.nasa_jpl_url}</CustomText>
    </>
  );
};

const mapStateToProps = (state: { favoriteObject: string[] }) => {
  return { favoriteObject: state.favoriteObject };
};

export default connect(mapStateToProps)(NearEarthObjectDetailsReview);

const CustomText = styled.Text`
  padding: 19px;
  color: #ffffff;
`;
