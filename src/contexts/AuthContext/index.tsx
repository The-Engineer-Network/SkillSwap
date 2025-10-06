import React, { useMemo, useReducer } from "react";

import authContext from "./context";
import { authReducer } from "./reducer";
import User  from '@/models/users';

const intialState = {
  currentUser: {
    id: "123", //place holder
    firstName:"Skill",
    lastName:"Swap",
    occupation: "Product Designer",
    email:""
  } as User,
  isLoggedIn: false,
  token: null,
};
export type InitialState = typeof intialState;

export type Action = { type: string; payload: any };

export default function AuthContextProvider({ children }: { children: any }) {
  const [state, dispatch] = useReducer(authReducer, intialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
