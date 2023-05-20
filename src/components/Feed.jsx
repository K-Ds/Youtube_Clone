import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography, Button, List } from '@mui/material';

import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/api';
import { topics } from "../utils/constants";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
    }, [selectedCategory]);

    return (
        <Stack sx={{
            flexDirection: { sx: "column", md: "row" },
        }}>
            <Box sx={{
                height: { sx: 'auto', md: '92vh', },
                borderRight: '1px solid #3d3d3d',
                px: { sx: 0, md: 2 },
                mr: { lg: "2rem" }
            }}>
                <Sidebar onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                <Typography className='copyright'
                    variant='body2' sx={{ mt: 1.5, color: '#fff' }}
                >
                    Copyright 2023 KD YT
                </Typography>
            </Box>

            <Box p={2}
                sx={{
                    overflowY: 'auto',
                    height: '90vh',
                    flex: 2
                }}>
                <List direction="row"
                    sx={{ background: "#000", width: '100%', display: 'flex', flexDirection: 'row', overflowX: 'auto', marginBottom: "2rem" }}
                >
                    {topics.map((category) => (
                        <Button key={category.name} startIcon={category.icon} onClick={() => setSelectedCategory(category.name)} sx={{
                            textTransform: "capitalize",
                            alignItems: "center",
                            justifyContent: "start",
                            borderRadius: "10px",
                            paddingBlock: ".5rem",
                            paddingInline: "1rem",
                            marginInline: ".51rem",
                            bgcolor: "rgba(255, 255, 255,0.2)",
                            color: '#fff',
                            fontWeight: "normal",
                            "&:hover": {
                                backgroundColor: 'rgba(255, 255, 255,0.2)'
                            },
                            minWidth: "fit-content",
                        }}>
                            {category.name}
                        </Button>
                    ))}
                </List>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: '#fff' }}
                >
                    {selectedCategory}
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed