import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCount,
  fetchUser,
  increaseCount,
  getOneUser,
} from "./feature/UserSlice";

const CounterComponent = () => {
  let data = useSelector((state) => state.user);
  let dispatch = useDispatch();
  console.log(data);

  return (
    <div>
      {data.count}
      <button
        onClick={() => {
          dispatch(increaseCount());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        getUser
      </button>
      <hr />

      {data.oneUser && <p>{data.getOneUser.name}</p>}

      {data.users.map((v) => {
        return (
          <Fragment key={v.id}>
            <p>{v.login}</p>
            <button
              onClick={() => {
                dispatch(getOneUser(v.login));
              }}
            >
              Get User
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CounterComponent;
