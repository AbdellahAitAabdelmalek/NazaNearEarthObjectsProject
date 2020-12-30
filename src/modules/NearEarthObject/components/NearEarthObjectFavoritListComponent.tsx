import React, { FunctionComponent } from "react";
import { NearEarthObject } from "../types/NearEarthObject.type";
import NearEarthObjectItem from "./NearEarthObjectItem";
import { connect } from "react-redux";

interface NearEarthObjectListProps {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
  dispatch: (action: Action) => void;
  favoriteObject: NearEarthObject[];
}
interface Action {
  type: string;
  value: NearEarthObject;
}

const NearEarthObjectListComponent: FunctionComponent<NearEarthObjectListProps> = (
  props: NearEarthObjectListProps
) => {
  console.log("start - NearEarthObjectListComponent ");
  return (
    <>
      {props.favoriteObject.map((nearEarthObject) => {
        return (
          <NearEarthObjectItem
            key={nearEarthObject.id}
            onItemIsPressed={props.onItemIsPressed}
            {...nearEarthObject}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state: { favoriteObject: NearEarthObject[] }) => {
  return { favoriteObject: state.favoriteObject };
};

export default connect(mapStateToProps)(NearEarthObjectListComponent);
