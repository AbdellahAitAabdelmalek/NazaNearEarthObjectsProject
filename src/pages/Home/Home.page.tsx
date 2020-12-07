import React, { FunctionComponent, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeProps } from './Home.interface';
import {Text, SafeAreaView, Button, StatusBar, StyleSheet,} from 'react-native';
import { useHomeNavigation } from './Home.hooks';

export const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  const {openPlayNearEarthObjectListScreen , openPlayEpicReviewScreen} = useHomeNavigation(
    navigation
  );
  const insets = useSafeAreaInsets();
  
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to the list of Near Earth Object"
        onPress={openPlayNearEarthObjectListScreen}
      />
      <Button 
        title="Go to the Earth Polychromatic Imaging Camera (EPIC)"
        onPress={openPlayEpicReviewScreen}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

