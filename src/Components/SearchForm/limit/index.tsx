import React, { FC } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { searchLimitAction } from "../../../Context/Actions";
import { IProp } from "./Interface";
import useStyles from "../style";


const Limit: FC<IProp> = ({ dispatch, disabled }: IProp) => {
    const classes = useStyles();

    return (
        <FormControl variant="outlined" size="small" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Limit</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                disabled={disabled}
                onChange={(event) => dispatch(searchLimitAction(event?.target?.value as number))}
                label="Category"
                placeholder="Limit"
                defaultValue={20}
            >
                <MenuItem value={5}>
                    5
                </MenuItem>
                <MenuItem value={10}>
                    10
                </MenuItem>
                <MenuItem value={20}>
                    20
                </MenuItem>
                <MenuItem value={50}>
                    50
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default React.memo(Limit);