import React from "react";
import Child from "./PropsComponents/Child";
import GrandParent from "./PropsComponents/GrandParent";
import Parent from "./PropsComponents/Parent";
import ContextComponent from "./ContextComponents/ContextComponent"; 
import ContextParent from "./ContextComponents/ContextParent";

const App = () => {
  return (
    <div>
      {/* <GrandParent/> */}
      <ContextComponent>
        <h2>this is context comp</h2>
        <ContextParent />
      </ContextComponent>
    </div>
  );
};

export default App;
