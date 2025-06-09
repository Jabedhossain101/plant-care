import React from 'react';

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 dark:border-violet-600"></div>
      </div>
    </div>
  );
};

export default Loader;
