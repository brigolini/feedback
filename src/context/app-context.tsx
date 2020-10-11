import React, {Dispatch, FunctionComponent, useReducer} from "react";
import {User} from "../api/users-api";

type AppState = {
    user: User | undefined;
    error: string | undefined;
}

type SetUserAction = { type: 'SetUser', payload: User };
type ClearuserAction = { type: 'ClearUser' };
type SetErrorAction = { type: 'SetError', payload: string };
type ClearErrorAction = { type: 'ClearError' };
type AppAction = SetUserAction | ClearuserAction | SetErrorAction | ClearErrorAction;

const initialState = {user: undefined, error: undefined}
const AppContext = React.createContext<[AppState, Dispatch<AppAction>]>([initialState, value => {
}])

const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "SetUser":
            state = {...state, user: action.payload}
    }
    return state;
}
const AppProvider: FunctionComponent = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <><AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider></>
}

function useAppContext() {
    const context = React.useContext(AppContext)
    if (context === undefined) throw new Error(`You only can useApp in AppContext`)
    return context
}

const setUser = (dispatch: Dispatch<SetUserAction>, payload: User) => dispatch({type: 'SetUser', payload: payload})
const clearUser = (dispatch: Dispatch<ClearuserAction>) => dispatch({type: 'ClearUser'})
const setError = (dispatch: Dispatch<SetErrorAction>, payload: string) => dispatch({type: 'SetError', payload: payload})
const clearError = (dispatch: Dispatch<ClearErrorAction>) => dispatch({type: 'ClearError'})


export {AppProvider, useAppContext, setUser, clearUser, setError, clearError}
