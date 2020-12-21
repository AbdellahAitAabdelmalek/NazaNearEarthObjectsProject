import React, { FunctionComponent } from "react";
import { HomeProps } from "./Home.interface";
import { SafeAreaView, Button, StatusBar, StyleSheet } from "react-native";
import { useHomeNavigation } from "./Home.hooks";

export const Home: FunctionComponent<HomeProps> = ({
  navigation,
}: HomeProps) => {
  const {
    openPlayNearEarthObjectListScreen,
    openPlayEpicReviewScreen,
  } = useHomeNavigation(navigation);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Go to the list of Near Earth Object'
        onPress={openPlayNearEarthObjectListScreen}
      />
      <Button
        title='Go to the Earth Polychromatic Imaging Camera (EPIC)'
        onPress={openPlayEpicReviewScreen}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
