import {User} from "../api/users-api";
import {AppAction} from "./actions";


export type AppState = {
    user: User | undefined;
    error: string | undefined;
}


export const reducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "SetUser":
            state = {...state, user: action.payload}
    }
    return state;
}
