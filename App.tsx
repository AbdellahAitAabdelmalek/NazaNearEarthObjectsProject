import React from "react";
import { AppNavigator } from "./src/navigation/AppNavigator/AppNavigator.navigator";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
const queryCache = new QueryCache();

if (__DEV__) {
  import("react-query-native-devtools").then(({ addPlugin }) => {
    addPlugin(queryCache);
  });
}

export default function App() {
  return (
    <>
      {/* <ReactQueryCacheProvider queryCache={queryCache}></ReactQueryCacheProvider> */}
      <AppNavigator />

      {/* <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools> */}
    </>
  );
}
