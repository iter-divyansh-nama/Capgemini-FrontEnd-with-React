import React from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { useState } from "react";
function Component1(){

    let [num, setNum] = useState({count:0})

    return(<>
    <h1>Component 1</h1>
    {/* <h1>This is h1</h1>
    <Component2 by="Aditya" className={["a","b","c"]} info={{class:"class getting shifted"}} /> */}
    <Component2 {...{num,setNum}} />
    <Component3 currentNum={{num,setNum}} />
    <hr />

    </>)
}

export default Component1