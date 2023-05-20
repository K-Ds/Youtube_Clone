import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import { demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channel }) => {
    const { id: { channelId }, snippet } = channel;
    console.log(channel);
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(channelId ? `/channel/${channelId}` : demoChannelUrl)} sx={{
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "transparent",
            width: 340,
            cursor: "pointer"

        }}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: 190, height: 190, borderRadius: "50%" }} />
            <CardContent>
                <Typography fontWeight="500" color="#fff">{snippet?.title}</Typography>
            </CardContent>
        </Card>
    )
}

export default ChannelCard