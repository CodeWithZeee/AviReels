import React from 'react';

const Mobile = () => {
  return (
    <div className="relative flex justify-center h-[200px] sm:h-[250px] lg:h-[300px] w-28 sm:w-36 lg:w-40 border-2 sm:border-3 lg:border-4 border-black rounded-xl sm:rounded-2xl bg-gray-50" style={{boxShadow: '5px 5px 2.5px 6px rgb(209, 218, 218)'}}>
      <span className="border border-black bg-black w-14 sm:w-16 lg:w-20 h-1.5 sm:h-2 rounded-br-xl rounded-bl-xl" />
      <span className="absolute -right-1 sm:-right-1.5 lg:-right-2 top-10 sm:top-12 lg:top-14 border-2 sm:border-3 lg:border-4 border-black h-5 sm:h-6 lg:h-7 rounded-md" />
      <span className="absolute -right-1 sm:-right-1.5 lg:-right-2 bottom-24 sm:bottom-28 lg:bottom-36 border-2 sm:border-3 lg:border-4 border-black h-7 sm:h-8 lg:h-10 rounded-md" />
    </div>
  );
}

export default Mobile;
