import { ActionType, IAction } from "./Interface";
import { ETabs } from "../DB/Interface";

// Action creators can be created here
// All action creators return an IAction

export const changeTabsAction = (payload: ETabs): IAction => ({
    type: ActionType.CHANGE_TABS, payload
});

export const searchCategoryAction = (payload: string): IAction => ({
    type: ActionType.SEARCH_CATEGORY, payload
});

export const searchProviderAction = (payload: string): IAction => ({
    type: ActionType.SEARCH_PROVIDER, payload
});

export const searchStatusAction = (payload: string): IAction => ({
    type: ActionType.SEARCH_STATUS, payload
});

export const searchTitleAction = (payload: string): IAction => {
    console.log("payload :: ", payload)
    return {
        type: ActionType.SEARCH_TITLE, payload
    }
};

export const completeSearchAction = () => ({
    type: ActionType.COMPLETE_SEARCH
});

export const startSearchAction = () => ({
    type: ActionType.START_SEARCH
});