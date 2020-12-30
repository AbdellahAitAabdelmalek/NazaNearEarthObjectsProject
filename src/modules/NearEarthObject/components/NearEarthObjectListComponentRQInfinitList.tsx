import React, { FunctionComponent, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import NearEarthObjectItem from "./NearEarthObjectItem";
import { NearEarthObject } from "../types/NearEarthObject.type";
import { colors } from "../../../core/theme/colors";

import { fetchNearEarthObjectList } from "../Hooks/NearEarthObjectListComponentRQInfinitListHooks";

interface NearEarthObjectListProps {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

export const NearEarthObjectListComponent: FunctionComponent<NearEarthObjectListProps> = ({
  onItemIsPressed,
}: NearEarthObjectListProps) => {
  const [listNearEarthObjects, setListNearEarthObjects] = useState<
    NearEarthObject[]
  >([]);
  const [
    listNearEarthObjectsFiltred,
    setListNearEarthObjectsFiltred,
  ] = useState<NearEarthObject[]>([]);
  const [searchedName, setsearchedName] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const {
    data,
    isLoading,
    isError,
    isSuccess,
    isPreviousData,
    isFetching,
  } = fetchNearEarthObjectList(page, searchedName);
  // filter listNearEarthObjects and put the result of that filter in ListNearEarthObjectsFiltred
  const _filterListObjectByName = () => {
    const myFiltredList = listNearEarthObjects.filter(
      (nearEarthObject: NearEarthObject) =>
        nearEarthObject.name.toLowerCase().includes(searchedName.toLowerCase())
    );
    setListNearEarthObjectsFiltred(myFiltredList);
  };

  React.useEffect(() => {
    console.log("states : " + isLoading, isError, isSuccess);
    console.log("Data : " + data);
    if (isSuccess) {
      const myFiltredList: NearEarthObject[] = data.near_earth_objects.map(
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
      setListNearEarthObjects([...listNearEarthObjects, ...myFiltredList]);
      // console.log("myFiltrerList : " + myFiltredList);
      // console.log("listNearEarthObjects" + listNearEarthObjects);
    }
  }, [data]);

  React.useEffect(() => {
    _filterListObjectByName();
  }, [searchedName, listNearEarthObjects]);
  return (
    <>
      <View
        style={{
          width: "90%",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder='Near Earth Object Name'
          onChangeText={(text) => {
            setsearchedName(text);
          }}
          style={{ textAlign: "center", color: colors.black, flex: 1 }}
        />
        <Button title='Search' onPress={() => _filterListObjectByName()} />
      </View>

      <View
        style={{
          width: "90%",
          flex: 8,
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        {isSuccess && (
          <FlatList<NearEarthObject>
            data={listNearEarthObjectsFiltred}
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
              setPage((old) => old + 1);
            }}
          />
        )}
        {isError && <Text style={{ color: colors.white }}> error </Text>}
        {isFetching && (
          <ActivityIndicator
            size='large'
            color='#00ff00'
            style={styles.activityIndicatorStyle}
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
