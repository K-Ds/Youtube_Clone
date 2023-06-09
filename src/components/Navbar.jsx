import React from 'react'
import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';

import { logo } from "../utils/constants"
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Stack direction="row"
            alignItems="center"
            justifyContent="space-between" p={2}
            sx={{ position: 'sticky', background: "#000", top: 0 }}
        >
            <Link to="/" class='logo'>
                <img src={logo} alt="logo" height={45} />
            </Link>

            <SearchBar />

            <div></div>
        </Stack>
    )
}

export default Navbar