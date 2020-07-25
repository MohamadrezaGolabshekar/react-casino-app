import DB from "./DB";
import { IGetItemsRequestBody, IItem, ETabs, IData, EStatus } from "./Interface";

export const getTabs = (): IData[] => {
    return DB.tabs as IData[];
}

export const getProviders = () => {
    return DB.providers as IData[];
}

export const getCategories = () => {
    return DB.categories as IData[];
}

export const getStatuses = () => {
    return DB.statuses as IData[];
}

/**
 * this just creates title array for when user search for title or not.
 * if user does not add search for title, I just return all available 
 * title in specific tab array
 */
const createTitleArray = (tab: ETabs, title = "") => {
    const tabTitles = DB[tab].map(i => i.title);
    const titleArr: any = [];
    if (title) {
        tabTitles.forEach((itemTitle: string) => {
            console.log("itemTitle.indexOf(title) :: ", itemTitle.indexOf(title))
            if (itemTitle.indexOf(title) >= 0) {
                titleArr.push(itemTitle);
            }
        })
    }
    return title ? titleArr : tabTitles;
}

/**
 * create fake data 
 * @param body 
 */
export const getItems = (body: IGetItemsRequestBody) => {
    return new Promise((resolve) => {
        const items: IItem[] = [] as IItem[];
        const titleArray = createTitleArray(body.tab, body.title);
        if (!titleArray.length) {
            setTimeout(() => resolve([]), 600);
        }
        const limit = body.limit || 20;
        for (let i = 1; i <= limit; i++) {
            const id = Math.floor(Math.random() * 1000000).toString();
            const item: IItem = {
                id,
                title: titleArray[Math.floor(Math.random() * titleArray.length)],
                provider: body.provider || DB.providers[Math.floor(Math.random() * DB.providers.length)].title,
                category: body.category || DB.categories[Math.floor(Math.random() * DB.categories.length)].title,
                status: body.status || DB.statuses[Math.floor(Math.random() * DB.statuses.length)].title as EStatus,
                thumbnail: `https://picsum.photos/300/200?q=${id}`
            };
            items.push(item);
        };
        setTimeout(() => resolve(items), 600);
    })
}
