import { render, act } from "@testing-library/react-native";
import React from "react";
import { NearEarthObjectListComponent } from "../components/NearEarthObjectListComponentRQ";
import { NearEarthObject } from "../types/NearEarthObject.type";
import { QueryClient, QueryClientProvider } from "react-query";
import nock from "nock";

function tick() {
  return act(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(0);
        }, 0)
      )
  );
}
const queryClient = new QueryClient();
const scope = nock("http://www.neowsapp.com")
  .get(
    "/rest/v1/neo/browse?api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw&page=0"
  )
  .reply(200, {
    near_earth_objects: [
      {
        id: 12,
        neo_reference_id: 13,
        name: "Abdel",
        name_limited: "name_limited",
        designation: "designation",
        nasa_jpl_url: "nasa_jpl_url",
        absolute_magnitude_h: 12,
        is_potentially_hazardous_asteroid: true,
        is_sentry_object: false,
      },
      {
        id: 13,
        neo_reference_id: 19,
        name: "Djamal",
        name_limited: "name_limited2",
        designation: "designation2",
        nasa_jpl_url: "nasa_jpl_url2",
        absolute_magnitude_h: 32,
        is_potentially_hazardous_asteroid: true,
        is_sentry_object: false,
      },
    ],
  });
scope.activeMocks();

test.only("should verify snapshot", async () => {
  const myNearEarthObjectListComponent = render(
    <QueryClientProvider client={queryClient}>
      <NearEarthObjectListComponent
        onItemIsPressed={(nearEarthObject: NearEarthObject) =>
          console.log("pressend" + nearEarthObject.id)
        }
      />
    </QueryClientProvider>
  );

  await tick();
  if (!scope.isDone()) {
    console.log("nock not intercepted");
  }

  expect(myNearEarthObjectListComponent).toMatchSnapshot();
});
