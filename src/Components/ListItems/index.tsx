import React, { FC, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useSearchItems from "../../hooks/useSearchItems";
import { IItem } from "../../DB/Interface";
import { startSearchAction } from "../../Context/Actions";
import { useAppContext } from "../../Context/AppContext";
import CardItem from "../Item";
import useStyles from "./style";

const ListItems: FC = () => {
    const items = useSearchItems();
    const [{ isStartSearchItems }, dispatch]: any = useAppContext();
    const classes = useStyles();
    useEffect(() => {
        dispatch(startSearchAction());
    }, []);

    return (
        <div className={classes.listWrapper}>
            {
                isStartSearchItems ? 
                <div className={classes.listWrapper}>
                    <CircularProgress size={34} thickness={4} />
                </div> :
                items.length ?
                <div className={classes.cardsWrapper}>
                    {
                        items.map((item: IItem) => (
                            <CardItem key={item.id} item={item}/>
                        ))
                    }
                </div>:
                <div className={classes.listWrapper}>No matched data :(</div> 
            }
        </div>
    )
};

export default ListItems;