import { useState, useEffect } from "react";
import { useAppContext } from "../Context/AppContext";
import { IItem, IGetItemsRequestBody } from "../DB/Interface";
import { getItems } from "../DB/API";
import {completeSearchAction} from "../Context/Actions"

function useSearchItems() {
    const [items, setItems] = useState<IItem[]>([] as IItem[]);
    const [state, dispatch]: any = useAppContext();

    const fetchItems = async () => {
        try {
            const body: IGetItemsRequestBody = {
                skip: state.skip,
                limit: state.limit,
                tab: state.tab,
                title: state.searchTitle || "",
                category: state.searchCategory || "",
                provider: state.searchProvider || "",
                status: state.searchStatus || ""
            }
            
            const fetchedItems: IItem[] = await getItems(body) as IItem[];
            setItems(fetchedItems);
            console.log(9999, fetchedItems)
            dispatch(completeSearchAction());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (state.isStartSearchItems) {
            fetchItems();
        }
    }, [state.isStartSearchItems]);

    return items;
}

export default useSearchItems;
