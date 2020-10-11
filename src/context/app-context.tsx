import React, {Dispatch, FunctionComponent, useReducer} from "react";
import {AppState, reducer} from "./reducer";
import {AppAction} from "./actions";


export const initialState = {user: undefined, error: undefined}
const AppContext = React.createContext<[AppState, Dispatch<AppAction>]>([initialState, value => {
}])


const AppProvider: FunctionComponent = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <><AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider></>
}

function useAppContext() {
    const context = React.useContext(AppContext)
    if (context === undefined) throw new Error(`You only can useApp in AppContext`)
    return context
}


export {AppProvider, useAppContext}
