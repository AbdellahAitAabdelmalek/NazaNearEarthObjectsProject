import { theme } from '../../core/theme';
import { colors } from '../../core/theme/colors';

import React, { FunctionComponent, useEffect } from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import { NearEarthObjectDetailsProps } from './NearEarthObjectDetailsReview.interface';
import { NearEarthObject } from '../../modules/NearEarthObject/types/NearEarthObject.type';
import CustomImage from '../../core/components/CustomImage'

export const NearEarthObjectDetailsReview : FunctionComponent<NearEarthObjectDetailsProps> = ({ route, navigation }) => {  
  const NearEarthObject: NearEarthObject | undefined = route.params?.NearEarthObject;
  console.log(NearEarthObject);
  return (
    <>
      <Text style={styles.text}>id = {NearEarthObject.id}</Text>
      <Text style={styles.text}>name = {NearEarthObject.name}</Text>
      <Text style={styles.text}>name_limited = {NearEarthObject.name_limited}</Text>
      <Text style={styles.text}>absolute_magnitude_h = {NearEarthObject.absolute_magnitude_h}</Text>
      <Text style={styles.text}>designation = {NearEarthObject.designation}</Text>
      <Text style={styles.text}>is_potentially_hazardous_asteroid = {NearEarthObject.is_potentially_hazardous_asteroid}</Text>
      <Text style={styles.text}>is_sentry_object = {NearEarthObject.is_sentry_object}</Text>
      <Text style={styles.text}>nasa_jpl_url = {NearEarthObject.nasa_jpl_url}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  text: {
    padding: 19,
    fontSize: 14,
    color: colors.white,
  }
});

  