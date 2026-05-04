let intialState = { user: [], loading : false };

import { fetchUser, addUser, pendingUser, removeUser } from "./Action";
import axiosInstance from "./AxiosInstance";

export let fetchAPI = () => {
  return async (dispatch) => {
    dispatch(pendingUser);
    let res = await axiosInstance.get("/users");
    console.log(res);

    dispatch(fetchUser(res.data));
  };
};

export function reduceruser(state = intialState, action) {
  switch (action.type) {
    case "AddUSER":
      return state;
    case "PENDING":
      return { ...state, loading: true };
    case "GetUSER":
      return { ...state, loading: false, user: [...action.payload] };
    case "REMOVEUSER":
      return state;
    default:
      return state;
  }
}
