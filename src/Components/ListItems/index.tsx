import React, { FC, useEffect } from "react";
import useSearchItems from "../../hooks/useSearchItems";
import { IItem } from "../../DB/Interface";
import { startSearchAction, resetSearchAction } from "../../Context/Actions";
import { useAppContext } from "../../Context/AppContext";
import CardItem from "../Item";
import useStyles from "./style";

const ListItems: FC = () => {
    const items = useSearchItems();
    const [{ isStartSearchItems }, dispatch]: any = useAppContext();
    const classes = useStyles();
    useEffect(() => {
        dispatch(startSearchAction());
        return () => dispatch(resetSearchAction());
    }, []);

    return (
        <div className={classes.listWrapper}>
            {
                items.length ?
                <div className={classes.cardsWrapper}>
                    {
                        items.map((item: IItem) => (
                            <CardItem key={item.id} item={item}/>
                        ))
                    }
                </div>:
                !isStartSearchItems ? "No matched data :(" : null
            }
        </div>
    )
};

export default ListItems;