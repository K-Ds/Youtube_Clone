import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route name="Feed" path="/" exact element={<Feed />} />
          <Route
            name="VideoDetail"
            path="/video/:id"
            element={<VideoDetail />}
          />
          <Route
            name="ChannelDetail"
            path="/channel/:id"
            element={<ChannelDetail />}
          />
          <Route
            name="Search"
            path="/search/:searchTerm"
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
