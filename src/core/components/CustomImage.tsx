import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

interface CustomImageProps {
  onPressFunction?: any;
  width: number;
  height: number;
  imageUrl: string;
}
// comment specifier que imageUri est un string ?
export default function CustomImage(props: CustomImageProps) {
    return (
    <TouchableOpacity onPress={props.onPressFunction ? ()=>props.onPressFunction(): ()=>{console.log('image clicked')}}>
      <Image 
          resizeMode="center"
          fadeDuration={1000}
          source={{
            width: props.width,
            height: props.height,
            uri : props.imageUrl,
          }}/>
    </TouchableOpacity>);
}