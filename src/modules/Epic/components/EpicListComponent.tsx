import React, { FunctionComponent, useState, useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import axios from "axios";
import { EpicPicture } from "../types/EpicPicture";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import CustomImage from "../../../core/components/CustomImage";
import { StateContext } from "../../../pages/EpicReview/EpicReview.hooks";

export const EpicListComponent: FunctionComponent = () => {
  const states = useContext(StateContext);
  if (states === undefined) {
    throw new Error("CustomDatePicker must be used within a States Provider");
  }
  const [dataState, setDataState] = useState<"loading" | "available">(
    "loading"
  );
  const [listImage, setListImage] = useState<EpicPicture[]>();

  const localItem = ({ item }: { item: EpicPicture }) => {
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
        resizeMode='center'
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
      .then((res) => {
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
      .catch((_err) => {
        console.log("erreur !!!!" + _err);
      });
  }, [states]);

  return (
    <View style={styles.container}>
      {dataState === "loading" ? (
        <ActivityIndicator
          size='large'
          color='#00ff00'
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 100,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        <FlatList<EpicPicture>
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
