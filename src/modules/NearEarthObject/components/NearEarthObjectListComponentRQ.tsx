import React, { FunctionComponent, useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { NearEarthObjectItem } from "./NearEarthObjectItem";
import { NearEarthObject } from "../types/NearEarthObject.type";
import styled from "styled-components/native";
import { usePaginatedQuery } from "react-query";
import { colors } from "../../../core/theme/colors";

const url =
  "http://www.neowsapp.com/rest/v1/neo/browse?api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw";

interface NearEarthObjectListProps {
  onItemIsPressed: (NearEarthObject: NearEarthObject) => void;
}

const fetchNearEarthObjects = async (key: string, page: number) => {
  const res = await fetch(url + "&page=" + page);
  return res.json();
};
export const NearEarthObjectListComponent: FunctionComponent<NearEarthObjectListProps> = ({
  onItemIsPressed,
}) => {
  const [listNearEarthObjects, setlistNearEarthObjects] = useState<
    NearEarthObject[]
  >([]);
  const [page, setPage] = useState<number>(0);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["NearEarthObjects", page],
    fetchNearEarthObjects
  );

  const FlatListCustom = styled.FlatList`
    width: 90%;
    background-color: white;
  `;

  React.useEffect(() => {
    if (status === "success") {
      const myList: NearEarthObject[] = resolvedData.near_earth_objects.map(
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
    }
  }, [status, page]);
  return (
    <>
      {status === "error" && (
        <Text style={{ color: colors.white }}> error </Text>
      )}
      {status === "loading" && (
        <Text style={{ color: colors.white }}> Loading ... </Text>
      )}
      {status === "success" && (
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Button
              title="prev"
              onPress={() => setPage((old) => Math.max(old - 1, 1))}
            />
            <Text style={{ color: colors.white }}> {page} </Text>
            <Button
              title="next"
              onPress={() => setPage((old) => (!latestData ? old : old + 1))}
            />
          </View>
          <View
            style={{
              flex: 9,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <FlatListCustom
              data={listNearEarthObjects}
              renderItem={({ item }: any) => (
                <NearEarthObjectItem
                  onItemIsPressed={onItemIsPressed}
                  {...item}
                />
              )}
              keyExtractor={(item: any) => item.id.toString()}
            />
          </View>
        </View>
      )}
    </>
  );
};
