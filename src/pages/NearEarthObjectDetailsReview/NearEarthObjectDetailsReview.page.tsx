import React, { FunctionComponent } from "react";
import { NearEarthObjectDetailsProps } from "./NearEarthObjectDetailsReview.interface";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { StyleSheet, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const CustomText = styled.Text`
  padding: 19px;
  color: #ffffff;
`;
interface Action {
  type: string;
  value: string;
}
interface localNearEarthObjectDetailsProps extends NearEarthObjectDetailsProps {
  dispatch: (action: Action) => void;
  favoriteObject: string[];
}

const NearEarthObjectDetailsReview: FunctionComponent<localNearEarthObjectDetailsProps> = (
  props: localNearEarthObjectDetailsProps
) => {
  const nearEarthObject: NearEarthObject | undefined =
    props.route.params?.NearEarthObject;

  const toggleFavorite = () => {
    const action = { type: "TOGGLE_FAVORITE", value: nearEarthObject.name };
    props.dispatch(action);
  };

  const displayFavoriteImage = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let sourceImage = require("../../../assets/ic_favorite_border.png");
    if (
      props.favoriteObject.findIndex(
        (item: string) => item === nearEarthObject.name
      ) !== -1
    ) {
      // Film dans nos favoris
      sourceImage = require("../../../assets/ic_favorite.png");
    }
    return <Image style={styles.favorite_image} source={sourceImage} />;
  };

  React.useEffect(() => {
    console.log(props);
  }, [props]);

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

const styles = StyleSheet.create({
  favorite_image: {
    width: 40,
    height: 40,
  },
});
