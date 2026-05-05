import React from "react";
import { Provider } from "react-redux";
import CounterComponent from "./app/CounterComponent";
import { store } from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};
export default App;
