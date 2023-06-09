import React from 'react';
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard, PlaylistCard } from "./";

const Videos = ({ videos }) => {

    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, id) => (
                <Box key={id}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channel={item} />}
                    {/* {item.id.playlistId && <PlaylistCard playlist={item} />} */}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos