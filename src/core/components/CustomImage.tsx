import React from 'react';
import {TouchableOpacity, Image, Alert} from 'react-native';

export default function NearEarthObjectsList() {

    return (
    <TouchableOpacity onPress={()=> Alert.alert("ImageClicked","You have clicked on the image",[ 
        {text: "Yes"},
        {text: "No"},
      ])
    }>
      {/* <Image style={styles.container} source={require("./assets/icon.png")} /> */}
      <Image 
          fadeDuration={1000}
          source={{
            width: 200,
            height:300,
            uri : "https://picsum.photos/200/300"
          }}/>
    </TouchableOpacity>);
}