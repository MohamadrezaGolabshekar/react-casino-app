import React, { FC } from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { searchTitleAction } from "../../../Context/Actions";
// import { debounce } from "../../../services/debounce";
import { IProp } from "./Interface";

const Title: FC<IProp> = ({ dispatch, disabled }: IProp) => {
    console.log("in search title");
    return (
        <TextField
            label="Search"
            variant="outlined"
            disabled={disabled}
            size="small"
            onChange={(e) => dispatch(searchTitleAction(e.target.value))}
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