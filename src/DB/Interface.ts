export interface IGetItemsRequestBody {
    skip: number;
    limit: number;
    tab: ETabs;
    title?: string;
    category?: string;
    provider?: string;
    status?: EStatus;
}

export interface IItem {
    id: string;
    title: string;
    provider: string;
    category: string;
    status: EStatus;
    thumbnail: string;
}

export interface IData {
    id: string;
    title: ETabs;
}


export enum ETabs {
    GAMES_TAB_ITEMS = "gamesTabItems",
    CATEGORY_TAB_ITEMS = "categoryTabItems",
    TYPE_TAB_ITEMS = "typeTabItems",
    PROVIDER_TAB_ITEMS = "providerTabItems",
}

export enum EStatus {
    ACTIVE = "active",
    DISABLE = "disable"
}