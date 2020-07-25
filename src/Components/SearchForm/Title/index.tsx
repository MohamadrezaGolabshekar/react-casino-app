import React, { FC } from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { searchTitleAction } from "../../../Context/Actions";
import { debounce } from "../../../services/debounce";
import { IProp } from "./Interface";
import useStyles from "../style";

const Title: FC<IProp> = ({ dispatch, disabled }: IProp) => {
    const classes = useStyles();

    const submit = (val: string) => {
        dispatch(searchTitleAction(val as string));
    };

    return (
        <TextField
            className={classes.formControl}
            label="Search"
            variant="outlined"
            disabled={disabled}
            size="small"
            onChange={(e) => debounce(submit, 400)(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    )

}

export default React.memo(Title);