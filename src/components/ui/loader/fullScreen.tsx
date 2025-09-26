import React from 'react';

const FullScreenLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border-primary h-32 w-32 animate-spin rounded-full border-b-4"></div>
    </div>
  );
};

export default FullScreenLoader;
