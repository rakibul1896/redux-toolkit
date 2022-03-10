import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addByNumber,
  incrementAsync,
} from './counterSlice';

const Button = ({ children, handleOnClick, name,className }) => {
  return (
    <button
      name={name}
      onClick={handleOnClick}
      className={`px-4 py-1 my-5 mx-3 text-red-500 text-2xl border-2 border-red-300 hover:bg-red-300 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

const Counter = () => {
  const [inputValue, setInputValue] = useState('');
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
      <div>
        <input
          type="number"
          value={inputValue}
          className="border-2 py-0.5 text-3xl px-3 w-16 text-sky-700"
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          autoFocus
        />
        <Button
          handleOnClick={() => {
            if (inputValue) dispatch(addByNumber(parseInt(inputValue)));
            setInputValue('');
            inputRef.current.focus();
          }}
        >
          Add amount
        </Button>
        <Button handleOnClick={() => dispatch(incrementAsync(Number(inputValue)))} className='relative asyncButton'>
          Add Async
        </Button>
      </div>
    </div>
  );
};

export default Counter;
