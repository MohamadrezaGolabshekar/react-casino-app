import React, { FC, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useAppContext } from "../../Context/AppContext";
import { changeTabsAction } from "../../Context/Actions";
import { getTabs } from "../../DB/API";
import { ITab, ETabs } from "../../DB/Interface";

const Tab: FC = () => {
    const [tabs, setTabs] = useState<ITab[]>([] as ITab[]);
    const [{ tab }, dispatch]: any = useAppContext();

    const fetchTabs = async () => {
        /**
         * we do not need to use async/await because our fetching is sync for now
         * but I use async/await to simulate server fetching
         */
        const allTabs = await getTabs();
        setTabs(allTabs);
        console.log("allTabs :: ", allTabs)
    }

    useEffect(() => {
        fetchTabs();
    }, []);

    return <div >
        <ButtonGroup aria-label="tab buttons">
            {
                tabs.map((tabItem: ITab) => (
                    <Button
                        key={tabItem.id}
                        disabled={tab === tabItem.id}
                        onClick={() => dispatch(changeTabsAction(tabItem.id as ETabs))}
                    >
                        {tabItem.title}
                    </Button>
                ))
            }
        </ButtonGroup>
    </div>

}

export default Tab;