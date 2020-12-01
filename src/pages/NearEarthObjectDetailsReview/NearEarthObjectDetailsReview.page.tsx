import React, { FunctionComponent, useEffect } from 'react';
import {Text,Image} from 'react-native';
import { NearEarthObjectDetailsProps } from './NearEarthObjectDetailsReview.interface';
import { NearEarthObject } from '../../modules/NearEarthObject/types/NearEarthObject.type';
import CustomImage from '../../core/components/CustomImage'

export const NearEarthObjectDetailsReview : FunctionComponent<NearEarthObjectDetailsProps> = ({ route, navigation }) => {  
  const NearEarthObject: NearEarthObject | undefined = route.params?.NearEarthObject;
  console.log(NearEarthObject);
  return (
    <>
      <Text>id = {NearEarthObject.id}</Text>
      <Text>name = {NearEarthObject.name}</Text>
      <Text>name_limited = {NearEarthObject.name_limited}</Text>
      <Text>absolute_magnitude_h = {NearEarthObject.absolute_magnitude_h}</Text>
      <Text>designation = {NearEarthObject.designation}</Text>
      <Text>is_potentially_hazardous_asteroid = {NearEarthObject.is_potentially_hazardous_asteroid}</Text>
      <Text>is_sentry_object = {NearEarthObject.is_sentry_object}</Text>
      <Text>nasa_jpl_url = {NearEarthObject.nasa_jpl_url}</Text>
    </>
  );
};

  