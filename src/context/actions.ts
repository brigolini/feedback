import {Dispatch} from "react";
import {User} from "../api/users-api";

export type SetUserAction = { type: 'SetUser', payload: User };
export type AppAction = SetUserAction;


export const setUser = (dispatch: Dispatch<SetUserAction>, payload: User) => dispatch({
    type: 'SetUser',
    payload: payload
})

