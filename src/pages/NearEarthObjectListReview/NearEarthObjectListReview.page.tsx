import { NearEarthObjectListProps } from "./NearEarthObjectListReview.interface";
import { useNearEarthObjectListNavigation } from "./NearEarthObjectListReview.hooks";
import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { NearEarthObjectListComponent } from "../../modules/NearEarthObject/components/NearEarthObjectListComponentRQInfinitList";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import { colors } from "../../core/theme/colors";

export const NearEarthObjectListReview: FunctionComponent<NearEarthObjectListProps> = ({
  navigation,
}: NearEarthObjectListProps) => {
  const {
    openPlayNearEarthObjectDetailsScreen,
  } = useNearEarthObjectListNavigation(navigation);

  return (
    <>
      <View style={styles.container}>
        <NearEarthObjectListComponent
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
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
