import React, { FC, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { changeTabsAction } from "../../Context/Actions";
import { getTabs } from "../../DB/API";
import { IData, ETabs } from "../../DB/Interface";
import { IProp } from "./Interface";
import useStyles from "./style";

const Tab: FC<IProp> = ({selectedTab, dispatch}: IProp) => {
    console.log("in TAB component")
    const [tabs, setTabs] = useState<IData[]>([] as IData[]);
    const classes = useStyles();
    const fetchTabs = async () => {
        /**
         * we do not need to use async/await because our fetching is sync for now
         * but I use async/await to simulate server fetching
         */
        const allTabs = await getTabs();
        setTabs(allTabs);
    }

    useEffect(() => {
        fetchTabs();
    }, []);

    return <div className={classes.tabWrapper}>
        <ButtonGroup aria-label="tab buttons" className={classes.buttonGroup}>
            {
                tabs.map((tabItem: IData) => (
                    <Button
                        classes={{disabled: classes.disabled}}
                        key={tabItem.id}
                        disabled={selectedTab === tabItem.id}
                        onClick={() => dispatch(changeTabsAction(tabItem.id as ETabs))}
                    >
                        {tabItem.title}
                    </Button>
                ))
            }
        </ButtonGroup>
    </div>

}

export default React.memo(Tab);