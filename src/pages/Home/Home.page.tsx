import React, { FunctionComponent, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeProps } from './Home.interface';
import {Text, SafeAreaView, Button} from 'react-native';
import { useHomeNavigation } from './Home.hooks';

export const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  const {openPlayNearEarthObjectListScreen } = useHomeNavigation(
    navigation
  );
  const insets = useSafeAreaInsets();
  
  return (
    <SafeAreaView>
      <Button
        title="Go to the list of Objects"
        onPress={openPlayNearEarthObjectListScreen}
      />
    </SafeAreaView>
  );
};

