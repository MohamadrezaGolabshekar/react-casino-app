import { ActionType, IAction } from "./Interface";
import { ETabs } from "../DB/Interface";

// Action creators can be created here
// All action creators return an IAction
export const changeTabsAction = (payload: ETabs): IAction => ({
    type: ActionType.CHANGE_TABS, payload
});