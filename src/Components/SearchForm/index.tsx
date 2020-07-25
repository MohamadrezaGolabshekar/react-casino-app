import React, { FC } from "react";
import SearchTitle from "./Title";
import SearchCategories from "./Categories";
import SearchProviders from "./Providers";
import SearchStatuses from "./Statuses";
import SearchLimit from "./limit";
import { useAppContext } from "../../Context/AppContext";
import useStyles from "./style";

const SearchForm: FC = () => {
    const classes = useStyles();
    const [{ isStartSearchItems }, dispatch]: any = useAppContext();
    
    return (
        <div className={classes.formWrapper}>
            <SearchTitle dispatch={dispatch} disabled={isStartSearchItems} />
            <SearchCategories dispatch={dispatch} disabled={isStartSearchItems} />
            <SearchProviders dispatch={dispatch} disabled={isStartSearchItems} />
            <SearchStatuses dispatch={dispatch} disabled={isStartSearchItems} />
            <SearchLimit dispatch={dispatch} disabled={isStartSearchItems} />
        </div>
    )

}

export default SearchForm;