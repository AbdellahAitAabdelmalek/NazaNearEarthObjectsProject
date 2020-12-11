import { theme } from "../../../core/theme";
import { colors } from "../../../core/theme/colors";
import React, {
  FunctionComponent,
  useEffect,
  useState,
  useReducer,
  useContext,
} from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { EpicPicture } from "../types/EpicPicture";
import LoadingData from "../../../core/components/LoadingData";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import CustomImage from "../../../core/components/CustomImage";
import { MyContext } from "../../../pages/EpicReview/EpicReview.page";

export const EpicListComponent: FunctionComponent = () => {
  const [states, dispatch] = useContext(MyContext);
  const [dataState, setDataState] = useState<"loading" | "available">(
    "loading"
  );
  const [listImage, setListImage] = useState<EpicPicture[]>();

  const localItem = ({ item }: any) => {
    const month: string = item.date.slice(5, 7);
    const day: string = item.date.slice(8, 10);
    const year: string = item.date.slice(0, 4);
    const imageUrl =
      "https://epic.gsfc.nasa.gov/archive/" +
      states.mode +
      "/" +
      year +
      "/" +
      month +
      "/" +
      day +
      "/png/" +
      item.image +
      ".png";
    const windowWidth = Dimensions.get("window").width * 0.9;
    return (
      <CustomImage
        width={windowWidth}
        height={windowWidth}
        imageUrl={imageUrl}
        resizeMode="center"
      />
    );
  };

  React.useEffect(() => {
    setDataState("loading");
    const month: string = ("0" + (states.date.getMonth() + 1)).slice(-2);
    const day: string = ("0" + states.date.getDate()).slice(-2);
    const year: string = "" + states.date.getFullYear();
    const url: string =
      "https://api.nasa.gov/EPIC/api/" +
      states.mode +
      "/" +
      year +
      "-" +
      month +
      "-" +
      day +
      "?api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw";
    axios
      .get(url)
      .then((res: any) => {
        const myList: EpicPicture[] = res.data.map(function (
          EpicPicture: EpicPicture
        ) {
          return {
            identifier: EpicPicture.identifier,
            caption: EpicPicture.caption,
            image: EpicPicture.image,
            version: EpicPicture.version,
            date: EpicPicture.date,
          };
        });
        setListImage(myList);
        setDataState("available");
      })
      .catch((_err: any) => {
        console.log("erreur !!!!");
      });
  }, [states]);

  return (
    <View style={styles.container}>
      {dataState === "loading" ? (
        <LoadingData loadingText="Image loading" />
      ) : (
        <FlatList
          style={styles.flatList}
          data={listImage}
          renderItem={localItem}
          keyExtractor={(item) => item.identifier.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: { width: "100%", flex: 1 },
});
