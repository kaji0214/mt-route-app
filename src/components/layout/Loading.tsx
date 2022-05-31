import { CircularProgress } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';

const Loading = () => {
  return (
    <Sidebar>
      <div
        role='loading'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <CircularProgress />
      </div>
    </Sidebar>
  );
};

export default Loading;
