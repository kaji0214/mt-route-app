import { Box, Typography } from '@mui/material';
import React, { memo } from 'react';

const EmptyData = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="overline" display="block" gutterBottom>
        No Data
      </Typography>
    </Box>
  );
};

export default memo(EmptyData);
