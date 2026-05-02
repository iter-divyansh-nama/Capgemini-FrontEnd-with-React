import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <div>
      <Parent value={{ surname: "whatttt" }} />
    </div>
  );
};

export default GrandParent;
