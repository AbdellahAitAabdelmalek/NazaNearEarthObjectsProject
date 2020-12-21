import React, { ReactElement } from "react";
import { TouchableOpacity, Image } from "react-native";

interface CustomImageProps {
  width: number;
  height: number;
  imageUrl: string;
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center" | undefined;
}
// comment specifier que imageUri est un string ?
const CustomImage = (props: CustomImageProps): ReactElement => {
  return (
    <TouchableOpacity onPress={() => console.log("image clicked")}>
      <Image
        resizeMode={props.resizeMode}
        fadeDuration={1000}
        source={{
          width: props.width,
          height: props.height,
          uri: props.imageUrl,
        }}
      />
    </TouchableOpacity>
  );
};
export default CustomImage;
