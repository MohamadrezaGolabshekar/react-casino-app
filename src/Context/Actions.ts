import { ActionType, IAction } from "./Interface";

// Action creators can be created here
// All action creators return an IAction
export const doSetUser = (payload: any): IAction => ({
    type: ActionType.TEST, payload
});