import React, { FC } from "react";
import SearchTitle from "./Title";
import SearchCategories from "./Categories";
import SearchProviders from "./Providers";
import SearchStatuses from "./Statuses";
import { useAppContext } from "../../Context/AppContext";
import useStyles from "./style";

const SearchForm: FC = () => {
    const classes = useStyles();
    const [, dispatch]: any = useAppContext();
    
    return (
        <div className={classes.formWrapper}>
            <SearchTitle dispatch={dispatch} />
            <SearchCategories dispatch={dispatch} />
            <SearchProviders dispatch={dispatch} />
            <SearchStatuses dispatch={dispatch} />
        </div>
    )

}

export default SearchForm;