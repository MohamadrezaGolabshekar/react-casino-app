import { ActionType, IAction } from "./Interface";
import { ETabs } from "../DB/Interface";
const initialState = {
    tab: ETabs.GAMES_TAB_ITEMS,
    isStartSearchItems: false
};

const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionType.CHANGE_TABS:
            return { 
                ...state,
                tab: action.payload,
                isStartSearchItems: true
             };

        default:
            return state;
    }
};

export { appReducer, initialState };