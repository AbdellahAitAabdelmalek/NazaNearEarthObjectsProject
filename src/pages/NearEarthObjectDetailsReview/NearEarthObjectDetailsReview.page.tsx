import React, { FunctionComponent } from "react";
import { NearEarthObjectDetailsProps } from "./NearEarthObjectDetailsReview.interface";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import styled from "styled-components/native";

const CustomText = styled.Text`
  padding: 19px;
  color: #ffffff;
`;
export const NearEarthObjectDetailsReview: FunctionComponent<NearEarthObjectDetailsProps> = ({
  route,
}: NearEarthObjectDetailsProps) => {
  const NearEarthObject: NearEarthObject | undefined =
    route.params?.NearEarthObject;
  return (
    <>
      <CustomText>id = {NearEarthObject.id}</CustomText>
      <CustomText>name = {NearEarthObject.name}</CustomText>
      <CustomText>name_limited = {NearEarthObject.name_limited}</CustomText>
      <CustomText>
        absolute_magnitude_h = {NearEarthObject.absolute_magnitude_h}
      </CustomText>
      <CustomText>designation = {NearEarthObject.designation}</CustomText>
      <CustomText>
        is_potentially_hazardous_asteroid ={" "}
        {NearEarthObject.is_potentially_hazardous_asteroid}
      </CustomText>
      <CustomText>
        is_sentry_object = {NearEarthObject.is_sentry_object}
      </CustomText>
      <CustomText>nasa_jpl_url = {NearEarthObject.nasa_jpl_url}</CustomText>
    </>
  );
};
