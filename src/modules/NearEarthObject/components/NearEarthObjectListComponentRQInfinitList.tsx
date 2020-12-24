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
import { NearEarthObjectItem } from "./NearEarthObjectItem";
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
  const { data, isLoading, isError, isSuccess } = fetchNearEarthObjectList(
    page,
    searchedName
  );

  const _filterListObjectByName = () => {
    const myFiltredList = listNearEarthObjects.filter(
      (nearEarthObject: NearEarthObject) =>
        nearEarthObject.name.toLowerCase().includes(searchedName.toLowerCase())
    );
    setListNearEarthObjectsFiltred(myFiltredList);
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
      setListNearEarthObjects([...listNearEarthObjects, ...myList]);
    }
  }, [data]);

  React.useEffect(() => {
    _filterListObjectByName();
  }, [searchedName]);

  return (
    <>
      <TextInput
        placeholder='Near Earth Object Name'
        onChangeText={(text) => {
          setsearchedName(text);
        }}
        style={{ textAlign: "center", color: colors.white }}
      />
      <Button title='Search' onPress={() => _filterListObjectByName()} />
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
