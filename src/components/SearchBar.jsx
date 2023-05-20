
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <Paper component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                width: "40vw",
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <input
                class="search-bar"
                onChange={() => { }}
                placeholder='Search'
            />
            <IconButton type='submit' sx={{ px: "20px", py: "10px", color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar