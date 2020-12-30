import React, { ReactElement } from "react";
import { AppNavigator } from "./src/navigation/AppNavigator/AppNavigator.navigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import Store from "./src/Store/configureStore";
const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </Provider>
    </>
  );
};
export default App;
