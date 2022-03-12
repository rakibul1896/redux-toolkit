import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addByNumber,
  incrementAsync,
} from './counterSlice';

const Button = ({ children, handleOnClick, name, className }) => {
  return (
    <button
      name={name}
      onClick={handleOnClick}
      className={`px-4 py-1 my-5 mx-3 text-red-500 text-2xl border-2 border-red-300 hover:bg-red-300 hover:text-white active:bg-red-500 ${className}`}
    >
      {children}
    </button>
  );
};

const Counter = () => {
  const [inputValue, setInputValue] = useState(0);
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex">
        <Button handleOnClick={() => dispatch(increment())}>+</Button>
        <p className="text-8xl m-3 -mt-2 text-sky-700">{data}</p>
        <Button handleOnClick={() => dispatch(decrement())}>-</Button>
      </div>
      <div className='flex items-center'>
        <input
          type="number"
          value={inputValue}
          className="w-20 max-w-xs -m-0.5 border-2 py-0.5 text-3xl px-3 text-sky-700"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          autoFocus
        />
        <Button
          handleOnClick={() => {
            if (inputValue) dispatch(addByNumber(parseInt(inputValue)));
            setInputValue(0);
            inputRef.current.focus();
          }}
        >
          Add amount
        </Button>
        <Button
          handleOnClick={() => {
            if (inputValue) dispatch(incrementAsync(Number(inputValue)));
            setInputValue(0);
            inputRef.current.focus();
          }}
          className="relative asyncButton"
        >
          Add Async
        </Button>
      </div>
    </div>
  );
};

export default Counter;
