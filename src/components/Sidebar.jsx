import React from 'react'
import { Stack, Button, Typography, Divider } from '@mui/material';
import { categories } from "../utils/constants";

const Section = ({ section, selectedCategory, onSelectCategory }) => {
    return (
        <>
            <Typography fontWeight={500} color="#fff" sx={{
                paddingBlock: ".5rem",
                paddingInline: ".7rem",
            }}>{section.title} </Typography>

            {section.children.map((category) => (
                <Button key={category.name} startIcon={category.icon} onClick={() => onSelectCategory(category.name)} sx={{
                    textTransform: "capitalize",
                    alignItems: "center",
                    justifyContent: "start",
                    borderRadius: "10px",
                    paddingBlock: ".5rem",
                    paddingInline: "1rem",
                    width: "100%",
                    bgcolor: category.name === selectedCategory && "rgba(255, 255, 255,0.2)",
                    color: '#fff',
                    fontWeight: "normal",
                    "&:hover": {
                        backgroundColor: 'rgba(255, 255, 255,0.2)'
                    },
                }}>
                    {category.name.length > 20 ? (category.name.slice(0, 20)) + "..." : category.name}
                </Button>
            ))}
        </>
    )
}

const Sidebar = ({ selectedCategory, onSelectCategory }) => {
    return (
        <Stack
            spacing={1}
            divider={< Divider orientation="horizontal" flexItem sx={{ borderColor: "rgba(255, 255, 255,0.2)" }} />}
            sx={{
                flexDirection: { sx: 'row', md: 'column' },
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
            }}>
            {
                categories.map(section => (
                    <Section section={section} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
                ))
            }

        </Stack>
    )
}

export default Sidebar