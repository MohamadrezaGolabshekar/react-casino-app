import DB from "./DB";
import { IGetItemsRequestBody, IItem, ETabs, ITab } from "./Interface";

export const getTabs = (): ITab[] => {
    return DB.tabs as ITab[];
}

export const getProviders = () => {
    return DB.providers;
}

export const getCategories = () => {
    return DB.categories;
}

export const getStatuses = () => {
    return DB.statuses
}

/**
 * this just creates title array for when user search for title or not.
 * if user does not add search for title, I just return all available 
 * title in specific tab array
 */
const createTitleArray = (tab: ETabs, title = "") => {
    const tabTitles = DB[tab].map(i => i.title);
    if (title) {
        const titleArr = [];
        tabTitles.forEach((itemTitle: string) => {
            if (itemTitle.indexOf(title) >= 0) {
                titleArr.push(itemTitle);
            }
        })
    }
    return tabTitles;
}

/**
 * create fake data 
 * @param body 
 */
export const getItems = async (body: IGetItemsRequestBody) => {
    const items: IItem[] = [] as IItem[];
    const titleArray = createTitleArray(body.tab, body.title);
    if (!titleArray.length) {
        return await setTimeout(() => [], 1000);
    }

    for (let i = 1; i <= body.limit || 20; i++) {
        const item: IItem = {
            id: Math.floor(Math.random() * 1000000).toString(),
            title: titleArray[Math.floor(Math.random() * titleArray.length)],
            provider: body.provider || DB.providers[Math.floor(Math.random() * DB.providers.length)].title,
            category: body.category || DB.categories[Math.floor(Math.random() * DB.categories.length)].title,
            status: body.status || DB.statuses[Math.floor(Math.random() * DB.statuses.length)].title,
            thumbnail: "https://picsum.photos/300/200"
        };
        items.push(item);
    };
    return await setTimeout(() => items, 1000);
}
