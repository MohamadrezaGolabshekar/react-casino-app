import React, { FC, useState, useEffect } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { searchCategoryAction } from "../../../Context/Actions";
import { getCategories } from "../../../DB/API";
import { IData } from "../../../DB/Interface";
import { IProp } from "./Interface";
import useStyles from "../style";


const Categories: FC<IProp> = ({ dispatch, disabled }: IProp) => {
    const [categories, setCategories] = useState<IData[]>([] as IData[]);
    const classes = useStyles();

    const fetchTabs = async () => {
        /**
         * we do not need to use async/await because our fetching is sync for now
         * but I use async/await to simulate server fetching
         */
        const allCategories = await getCategories();
        setCategories(allCategories);
    }

    useEffect(() => {
        fetchTabs();
    }, []);

    return (
        <FormControl variant="outlined" size="small" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Categories</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                disabled={disabled}
                onChange={(event) => dispatch(searchCategoryAction(event?.target?.value as string))}
                label="Category"
                placeholder="All Categories"
                defaultValue=""
            >
                <MenuItem value="">
                    <em>All Categories</em>
                </MenuItem>
                {
                    categories.map((item: IData) => (
                        <MenuItem
                            key={item.id}
                            value={item.title}
                        >
                            {item.title}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default React.memo(Categories);