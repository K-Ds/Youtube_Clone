import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video }) => {
    const { id: { videoId }, snippet } = video;
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(videoId ? `/video/${videoId}` : demoVideoUrl)} sx={{ width: 340, bgcolor: "transparent", cursor: "pointer" }}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: "100%", height: 190, borderRadius: "10px" }}
            />

            <CardContent  >
                <Typography color="#fff" fontWeight="500">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VideoCard