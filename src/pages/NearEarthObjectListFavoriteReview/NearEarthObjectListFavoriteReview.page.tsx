import { NearEarthObjectListProps } from "./NearEarthObjectListFavoriteReview.interface";
import { useNearEarthObjectListFavoriteNavigation } from "./NearEarthObjectListFavoriteReview.hooks";
import React, { FunctionComponent } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import NearEarthObjectFavoriteListComponent from "../../modules/NearEarthObject/components/NearEarthObjectFavoriteListComponent";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import { colors } from "../../core/theme/colors";

export const NearEarthObjectFavoriteListReview: FunctionComponent<NearEarthObjectListProps> = ({
  navigation,
}: NearEarthObjectListProps) => {
  const {
    openPlayNearEarthObjectDetailsScreen,
  } = useNearEarthObjectListFavoriteNavigation(navigation);

  return (
    <>
      <View style={styles.container}>
        <NearEarthObjectFavoriteListComponent
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
