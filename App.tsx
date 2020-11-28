import React from 'react';
import { StatusBar, StyleSheet,Alert,Image,SafeAreaView,TouchableOpacity, Platform} from 'react-native';
import NearEarthObjectsList from './src/modules/NearEarthObject/NearEarthObjectsList';

const CustomImage = () => (
    <TouchableOpacity onPress={()=> Alert.alert("ImageClicked","You have clicked on the image",[ 
        {text: "Yes"},
        {text: "No"},
      ])
    }>
      <Image 
          fadeDuration={1000}
          source={{
            width: 200,
            height:300,
            uri : "https://picsum.photos/200/300"
          }}/>
    </TouchableOpacity>  
  );

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.container} source={require("./assets/icon.png")} />
      <NearEarthObjectsList/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

