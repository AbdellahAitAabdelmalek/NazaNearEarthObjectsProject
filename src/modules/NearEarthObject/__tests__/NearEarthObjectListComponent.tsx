import React from "react";
import { act, create } from "react-test-renderer";
import { NearEarthObjectListComponent } from "../components/NearEarthObjectListComponent";
import { NearEarthObject } from "../types/NearEarthObject.type";
import nock from "nock";
import Store from "../../../Store/configureStore";
import { Provider } from "react-redux";

function tick() {
  return act(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 0)
      )
  );
}
const scope = nock("http://www.neowsapp.com")
  .get(
    "/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw"
  )
  .reply(200, {
    near_earth_objects: [
      {
        id: 12,
        neo_reference_id: 13,
        name: "Abdellah",
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
        name: "Djamal Dahman",
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
test("renders correctly", async () => {
  let tree: any;
  await act(async () => {
    tree = create(
      <Provider store={Store}>
        <NearEarthObjectListComponent
          onItemIsPressed={(nearEarthObject: NearEarthObject) =>
            console.log(" -- sent -- " + nearEarthObject.id)
          }
        />
      </Provider>
    );
  });

  await act(async () => {
    tree.update(
      <Provider store={Store}>
        <NearEarthObjectListComponent
          onItemIsPressed={(nearEarthObject: NearEarthObject) =>
            console.log(" -- sent -- " + nearEarthObject.id)
          }
        />
      </Provider>
    );
  });
  await tick();

  expect(tree).toMatchSnapshot();
});
