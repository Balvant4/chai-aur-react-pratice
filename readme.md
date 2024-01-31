1. #### what is hooks
   Definition:

Hooks: Hooks are functions that allow you to use React state and lifecycle features in functional components. They enable functional components to have local component state, lifecycle methods, and other features that were previously only available in class components.

## with the help of this import we use state called hooks

example = import React, { useState } from 'react';
const Counter = () => {
const [count, setCount] = useState(0);

const handleIncrement = () => {
setCount(count + 1);
};

const handleDecrement = () => {
setCount(count - 1);
};

return (

<div>

## we use multiple time

// call count to increment the number or decrement
<p>Count: {count}</p>
<p>Count: {count}</p>
<p>Count: {count}</p> 
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
</div>
);
};

2. #### what is promps?

## balvant defination - ham promps ko use karke multiple cards bana sakte hai aur uska value bhi easly change kar sakte hai 
### iska example 03tailwindpromps file me hai


Definition:
Props (Properties): In React, "props" is a short form of "properties." Props are a mechanism for passing data from a parent component to a child component. They allow you to customize and configure child components by providing them with values or functions.
 

