import React, { createContext, useContext } from "react";
import { contextApi } from "./ContextComponent";
import ContextComponent from "./ContextComponent";
import {
  getProducts,
  patchProduct,
  postProduct,
} from "../APIServiceLayer/APIRequest";

const ContextChild = () => {
  // let {Consumer} =  contextApi
  let data = useContext(contextApi);
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.state.count}</h1>
      <button
        onClick={() => {
          data.updateState({ count: data.state.count + 1 });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          data.updateState({ count: data.state.count - 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          postProduct();
        }}
      >
        Post the Data
      </button>

      <button
        onClick={() => {
          patchProduct("74Y8KUzND24", { city: "Jaipur" });
        }}
      >
        Patch
      </button>

      <button
        onClick={() => {
          getProducts();
        }}
      >
        get Products
      </button>

      {/* <h1>{data.nam}</h1> */}
      {/* Conext Child */}
    </div>
  );
};

export default ContextChild;
