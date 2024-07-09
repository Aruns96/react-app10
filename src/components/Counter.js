
import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterActions} from "../store/index"

const Counter = () => {
  const dispatch = useDispatch();
   const counter = useSelector(state=>state.counter.counter)
   const showCounter = useSelector(state=>state.counter.showCounter)

   const incrementHandler = ()=>{
          dispatch(counterActions.increment())
   }
   const decrementHandler = ()=>{
         dispatch(counterActions.decrement())
   }
   const increaseHandler = ()=>{
        dispatch(counterActions.increase(2))
}
  const toggleCounterHandler = () => {
       dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     
      {showCounter&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increment by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
