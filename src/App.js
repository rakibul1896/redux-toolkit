import React from 'react';

export function App({ elements }) {
  return (
    <div className="flex justify-center bg-mbg overflow-hidden min-h-screen">
      <div className="flex flex-col items-center w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-6/12 bg-white my-10 rounded-3xl">
        {elements.map((Element, ind) => (
          <Element key={ind}/>
        ))}
      </div>
    </div>
  );
}
export default App;
