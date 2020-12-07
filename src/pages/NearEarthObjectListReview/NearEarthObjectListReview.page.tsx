import { NearEarthObjectListProps } from "./NearEarthObjectListReview.interface";
import { useNearEarthObjectListNavigation } from "./NearEarthObjectListReview.hooks";
import React, { FunctionComponent } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { NearEarthObjectListComponent } from "../../modules/NearEarthObject/components/NearEarthObjectListComponent";
import { NearEarthObject } from "../../modules/NearEarthObject/types/NearEarthObject.type";
import { colors } from "../../core/theme/colors";

export const NearEarthObjectListReview: FunctionComponent<NearEarthObjectListProps> = ({
  navigation,
}) => {
  const {
    openPlayNearEarthObjectDetailsScreen,
  } = useNearEarthObjectListNavigation(navigation);

  return (
    <>
      <Text style={styles.text}> List of all Near Earth Objects : </Text>
      <SafeAreaView style={styles.container}>
        <NearEarthObjectListComponent
          onItemIsPressed={(NearEarthObject: NearEarthObject) =>
            openPlayNearEarthObjectDetailsScreen(NearEarthObject)
          }
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});
