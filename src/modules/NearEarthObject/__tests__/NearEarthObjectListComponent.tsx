import React from "react";
import { act, create } from "react-test-renderer";
import { NearEarthObjectListComponent } from "../components/NearEarthObjectListComponent";
import { NearEarthObject } from "../types/NearEarthObject.type";
function tick() {
  return act(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 2)
      )
  );
}
test("renders correctly", async () => {
  // let tree;
  // act(() => {
  //   tree = create(
  //     <NearEarthObjectListComponent
  //       onItemIsPressed={(nearEarthObject: NearEarthObject) =>
  //         console.log(" -- send -- " + nearEarthObject.id)
  //       }
  //     />
  //   ).toJSON();
  // });
  const tree = await create(
    <NearEarthObjectListComponent
      onItemIsPressed={(nearEarthObject: NearEarthObject) =>
        console.log(" -- send -- " + nearEarthObject.id)
      }
    />
  ).toJSON();
  await tick();

  expect(tree).toMatchSnapshot();
});
