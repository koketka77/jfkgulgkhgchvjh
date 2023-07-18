import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import { RNDDecrement, RNDIncrement, decrement, increment } from '../../Store/actions/action';

const App = () => {
    const count = useSelector((state)=> state.count)
const dispatch = useDispatch()

 const onIncrement = () => dispatch(increment())
 const onDecrement = () => dispatch(decrement())

 const onRNDInc = ()=> dispatch(RNDIncrement())

 const onRNDDec = ()=> dispatch(RNDDecrement(54))



    return (
        <div>
           <h1 id="count">{count}</h1>
    <button onClick={onIncrement} id="INC">INC</button>
    <button onClick={onDecrement} id="DEC">DEC</button>
    <button onClick={onRNDInc} id="RNDIncrement">+RND</button>
    <button onClick={onRNDInc} id="RNDDecrement">-RND</button>
     
        </div>
    );
}

export default App;
