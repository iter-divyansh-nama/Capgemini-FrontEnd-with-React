import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import ComponentRTK from "./RTK/ComponentRTK";
// import { Provider } from 'redux';
const App = () => {
  return (
    <div>
      {/* <Provider store={store}>
        <Component2 />
        <Component1 />
      </Provider> */}
      <ComponentRTK />
    </div>
  );
};
export default App;
