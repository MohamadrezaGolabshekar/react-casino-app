import { ActionType, IAction } from "./Interface";
const initialState = {};

const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionType.TEST:
            return { ...state, user: action.payload };

        default:
            return state;
    }
};

export { appReducer, initialState };