import React, { FC, useState, useEffect } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { searchProviderAction } from "../../../Context/Actions";
import { getProviders } from "../../../DB/API";
import { IData } from "../../../DB/Interface";
import { IProp } from "./Interface";
import useStyles from "../style";

const Providers: FC<IProp> = ({ dispatch, disabled }: IProp) => {
    const [providers, setProviders] = useState<IData[]>([] as IData[])
    const classes = useStyles();

    const fetchTabs = async () => {
        /**
         * we do not need to use async/await because our fetching is sync for now
         * but I use async/await to simulate server fetching
         */
        const allProviders = await getProviders();
        setProviders(allProviders);
    }

    useEffect(() => {
        fetchTabs();
    }, []);

    return (
        <FormControl variant="outlined" size="small" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Providers</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                disabled={disabled}
                onChange={(event) => dispatch(searchProviderAction(event?.target?.value as string))}
                label="Category"
                placeholder="All Providers"
                defaultValue=""
            >
                <MenuItem value="">
                    <em>All Providers</em>
                </MenuItem>
                {
                    providers.map((item: IData) => (
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

export default React.memo(Providers);