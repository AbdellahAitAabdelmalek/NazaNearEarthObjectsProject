import React, { FunctionComponent, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { NearEarthObjectItem } from "./NearEarthObjectItem";
import { NearEarthObject } from "../types/NearEarthObject.type";
import { useQuery } from "react-query";
import { colors } from "../../../core/theme/colors";

const url =
  "http://www.neowsapp.com/rest/v1/neo/browse?api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw";

interface NearEarthObjectListProps {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

const fetchNearEarthObjects = async (page: number) => {
  const res = await fetch(url + "&page=" + page);
  return res.json();
};

export const NearEarthObjectListComponent: FunctionComponent<NearEarthObjectListProps> = ({
  onItemIsPressed,
}: NearEarthObjectListProps) => {
  const [listNearEarthObjects, setlistNearEarthObjects] = useState<
    NearEarthObject[]
  >([]);
  const [searchedName, setsearchedName] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    isPreviousData,
    isFetching,
  } = useQuery(["NearEarthObjects", page], () => fetchNearEarthObjects(page), {
    keepPreviousData: true,
  });

  const filterlistNearEarthObjects = (name: string) => {
    const myFiltredList = listNearEarthObjects.filter(
      (nearEarthObject: NearEarthObject) =>
        nearEarthObject.name.includes(searchedName)
    );
    console.log(listNearEarthObjects);
    console.log(myFiltredList);
    setlistNearEarthObjects(myFiltredList);
  };
  React.useEffect(() => {
    if (isSuccess) {
      const myList: NearEarthObject[] = data.near_earth_objects.map(function (
        near_earth_object: NearEarthObject
      ) {
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
      });
      const myFiltredList = myList.filter((nearEarthObject: NearEarthObject) =>
        nearEarthObject.name.includes(searchedName)
      );
      setlistNearEarthObjects(myFiltredList);
      //searchObjectByName();
    }
  }, [data, page, searchedName]);
  return (
    <>
      <TextInput
        placeholder='Near Earth Object Name'
        onChangeText={(text) => setsearchedName(text)}
        //onSubmitEditing={() => _searchObjectByName()}
      />
      <View
        style={{
          width: "90%",
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        {isError && <Text style={{ color: colors.white }}> error </Text>}
        {isLoading && (
          <ActivityIndicator
            size='large'
            color='#00ff00'
            style={styles.activityIndicatorStyle}
          />
        )}
        {isSuccess && (
          <FlatList<NearEarthObject>
            data={listNearEarthObjects}
            renderItem={({ item }: { item: NearEarthObject }) => (
              <NearEarthObjectItem
                onItemIsPressed={onItemIsPressed}
                {...item}
              />
            )}
            keyExtractor={(item: NearEarthObject) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              console.log("onEndReached");
              //setPage((old) => old + 1);
            }}
          />
        )}
      </View>
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
