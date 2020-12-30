import React, { FunctionComponent, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import NearEarthObjectItem from "./NearEarthObjectItem";
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
      setlistNearEarthObjects(myList);
    }
  }, [data, page]);
  return (
    <>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Button
          onPress={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
          title='Previous Page'
        />
        {isFetching ? (
          <ActivityIndicator size='large' color='#00ff00' />
        ) : (
          <Text style={{ color: colors.white }}>{page}</Text>
        )}
        <Button
          title='Next Page'
          onPress={() => {
            if (!isPreviousData) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPreviousData}
        />
      </View>

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
