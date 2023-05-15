import React from 'react'
import { Stack, Button } from '@mui/material';
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, onSelectCategory }) => {
    return (
        <Stack
            spacing={1.2}
            sx={{
                flexDirection: { sx: 'row', md: 'column' },
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
            }}>
            {categories.map((category) => (
                <Button key={category.name} startIcon={category.icon} onClick={() => onSelectCategory(category.name)} sx={{
                    textTransform: "capitalize",
                    alignItems: "center",
                    justifyContent: "start",
                    borderRadius: "10px",
                    paddingBlock: ".5rem",
                    paddingInline: "1rem",
                    bgcolor: category.name === selectedCategory && "rgba(255, 255, 255,0.2)",
                    color: '#fff',
                    "&:hover": {
                        backgroundColor: 'rgba(255, 255, 255,0.2)'
                    },
                }}>
                    {category.name}
                </Button>
            ))}
        </Stack>
    )
}

export default Sidebar