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

export const searchLimitAction = (payload: number): IAction => ({
    type: ActionType.SEARCH_LIMIT, payload
});

export const searchTitleAction = (payload: string): IAction => ({
    type: ActionType.SEARCH_TITLE, payload
});

export const completeSearchAction = (payload: { hasItems: boolean }) => ({
    type: ActionType.COMPLETE_SEARCH, payload
});

export const startSearchAction = () => ({
    type: ActionType.START_SEARCH
});

export const resetSearchAction = () => ({
    type: ActionType.RESET_SEARCH
});

export const loadMoreAction = () => ({
    type: ActionType.LOAD_MORE
});