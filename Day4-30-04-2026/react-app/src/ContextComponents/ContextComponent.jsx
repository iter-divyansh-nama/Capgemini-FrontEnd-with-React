import React, { createContext , useState} from 'react'
//first we need to cfeate and export the context api reference
// ? we use the createContext method
export let contextApi = createContext();



const ContextComponent = (props) => {
    // console.log(props);
    // console.log(contextApi);
    let[state, setState] = useState({count:0});
    // setState(prev=>({...prev, count:state.count+1}))
    function updateState(obj){
      setState(prev=>({...prev,...obj})); //raj and raja example

    }
    let {Provider} = contextApi;
  return (
    <div>
        <Provider  value = {{name:"JECRC", state, updateState}} >
        {props.children}
        </Provider>
      {/* Context Component */}
    </div>
  )
}

export default ContextComponent
