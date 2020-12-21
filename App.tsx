import React, { ReactElement } from "react";
import { AppNavigator } from "./src/navigation/AppNavigator/AppNavigator.navigator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </>
  );
};
export default App;
