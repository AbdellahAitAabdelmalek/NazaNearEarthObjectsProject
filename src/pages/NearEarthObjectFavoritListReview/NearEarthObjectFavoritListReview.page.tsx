import { NearEarthObjectListProps } from "./NearEarthObjectFavoritListReview.interface";
import { useNearEarthObjectListFavoritNavigation } from "./NearEarthObjectFavoritListReview.hooks";
import React, { FunctionComponent } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import NearEarthObjectFavoritListComponent from "../../modules/NearEarthObject/components/NearEarthObjectFavoritListComponent";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import { colors } from "../../core/theme/colors";

export const NearEarthObjectFavoritListReview: FunctionComponent<NearEarthObjectListProps> = ({
  navigation,
}: NearEarthObjectListProps) => {
  const {
    openPlayNearEarthObjectDetailsScreen,
  } = useNearEarthObjectListFavoritNavigation(navigation);

  return (
    <>
      <View style={styles.container}>
        <NearEarthObjectFavoritListComponent
          onItemIsPressed={(NearEarthObject: NearEarthObject) =>
            openPlayNearEarthObjectDetailsScreen(NearEarthObject)
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
