import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import NearEarthObjectItem from "../components/NearEarthObjectItem";
import { NearEarthObject } from "../types/NearEarthObject.type";
import Store from "../../../Store/configureStore";
const nearEarthObject: NearEarthObject = {
  id: 12,
  neo_reference_id: 13,
  name: "adebl",
  name_limited: "name_limited",
  designation: "designation",
  nasa_jpl_url: "nasa_jpl_url",
  absolute_magnitude_h: 12,
  is_potentially_hazardous_asteroid: true,
  is_sentry_object: false,
};
test("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={Store}>
        <NearEarthObjectItem
          {...nearEarthObject}
          onItemIsPressed={(nearEarthObject: NearEarthObject) =>
            console.log("pressend" + nearEarthObject.id)
          }
        />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
