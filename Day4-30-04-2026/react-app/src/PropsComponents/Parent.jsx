import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
        <h3>the surname of parent is {props.value.surname} </h3>
      <Child value={props} {...{props}} />
    </div>
  )
}

export default Parent
