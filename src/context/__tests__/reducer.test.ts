import {AppState, reducer} from "../reducer";
import {initialState} from "../app-context";
import {User} from "../../api/users-api";
import {SetUserAction} from "../actions";

let user: User;
let userAction: SetUserAction;
let newState: AppState;

beforeEach(() => {
    user = {
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bartjo/128.jpg",
        "firstName": "Sonya",
        "id": "d0c8899d-f848-4385-b386-7a90cdbc2fd1",
        "lastName": "Kuhlman"
    }

    userAction = {
        type: 'SetUser',
        payload: user
    }

    newState = reducer(initialState, userAction);

})

it('saves user to the state', () => {
    expect(newState.user).toBeTruthy();
    expect(newState.user?.id).toBe(user.id);
});

it('saves the right user', () => {
    expect(newState.user).toBeTruthy();
    expect(newState.user?.id).toBe(user.id);
});

it('replaces the user correctly', () => {

    const otherUser = {
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bartjo/128.jpg",
        "firstName": "Sonya",
        "id": "1234",
        "lastName": "Kuhlman"
    }

    const otherAction: SetUserAction = {
        type: 'SetUser',
        payload: otherUser
    }
    newState = reducer(newState, otherAction)
    expect(newState.user).toBeTruthy();
    expect(newState.user?.id).toBe(otherUser.id);
});
