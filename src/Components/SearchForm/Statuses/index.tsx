import React, { FC, useState, useEffect } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { searchStatusAction } from "../../../Context/Actions";
import { getStatuses } from "../../../DB/API";
import { IData } from "../../../DB/Interface";
import { IProp } from "./Interface";
import useStyles from "../style";

const Statuses: FC<IProp> = ({ dispatch }: IProp) => {
    const [statuses, setStatuses] = useState<IData[]>([] as IData[]);
    const classes = useStyles();

    const fetchTabs = async () => {
        /**
         * we do not need to use async/await because our fetching is sync for now
         * but I use async/await to simulate server fetching
         */
        const allStatuses = await getStatuses();
        setStatuses(allStatuses);
    }

    useEffect(() => {
        fetchTabs();
    }, []);
    
    return (
        <FormControl variant="outlined" size="small" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Statuses</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={(event) => dispatch(searchStatusAction(event?.target?.value as string))}
                label="Category"
                placeholder="All Statuses"
                defaultValue=""
            >
                <MenuItem value="">
                    <em>All Statuses</em>
                </MenuItem>
                {
                    statuses.map((item: IData) => (
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

export default React.memo(Statuses);