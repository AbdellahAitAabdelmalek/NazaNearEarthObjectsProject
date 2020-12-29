import React, { FunctionComponent, useState } from "react";
import { NearEarthObject } from "../types/NearEarthObject.type";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NearEarthObjectItem } from "./NearEarthObjectItem";
import axios from "axios";

const url =
  "http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw";

interface NearEarthObjectListProps {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

export const NearEarthObjectListComponent: FunctionComponent<NearEarthObjectListProps> = ({
  onItemIsPressed,
}: NearEarthObjectListProps) => {
  console.log("start - NearEarthObjectListComponent ");
  const [listNearEarthObjects, setlistNearEarthObjects] = useState<
    NearEarthObject[]
  >([]);
  const [isLoading, setisLoading] = useState<boolean>(true);

  const loadData = async () => {
    await axios
      .get(url)
      .then((res) => {
        const myList: NearEarthObject[] = res.data.near_earth_objects.map(
          function (near_earth_object: NearEarthObject) {
            return {
              id: near_earth_object.id,
              neo_reference_id: near_earth_object.neo_reference_id,
              name: near_earth_object.name,
              name_limited: near_earth_object.name_limited,
              designation: near_earth_object.designation,
              nasa_jpl_url: near_earth_object.nasa_jpl_url,
              absolute_magnitude_h: near_earth_object.absolute_magnitude_h,
              is_potentially_hazardous_asteroid:
                near_earth_object.is_potentially_hazardous_asteroid,
              is_sentry_object: near_earth_object.is_sentry_object,
            };
          }
        );
        setlistNearEarthObjects(myList);
        setisLoading(false);
      })
      .catch((_err) => {
        console.log("erreur !!!!" + _err);
      });
  };
  React.useEffect(() => {
    console.log("start loading - ");
    loadData();
    console.log("finish loading - ");
  }, []);

  return (
    <>
      {
        isLoading === true ? (
          <ActivityIndicator
            size='large'
            color='#00ff00'
            style={styles.activityIndicatorStyle}
          />
        ) : (
          listNearEarthObjects?.map((nearEarthObject) => {
            return (
              <NearEarthObjectItem
                key={nearEarthObject.id}
                onItemIsPressed={onItemIsPressed}
                {...nearEarthObject}
              />
            );
          })
        )

        // <FlatList<NearEarthObject>
        //   data={listNearEarthObjects}
        //   renderItem={({ item }: { item: NearEarthObject }) => (
        //     <NearEarthObjectItem onItemIsPressed={onItemIsPressed} {...item} />
        //   )}
        //   keyExtractor={(item: NearEarthObject) => item.id.toString()}
        // />)
      }
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
