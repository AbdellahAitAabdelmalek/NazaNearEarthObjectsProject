import React, { ReactElement } from "react";
import { AppNavigator2 } from "./src/navigation/AppNavigator/AppNavigator.navigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import Store from "./src/Store/configureStore";
const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
          <AppNavigator2 />
        </QueryClientProvider>
      </Provider>
    </>
  );
};
export default App;
