import { RNDDECREMENT, RNDINCREMENT } from "../types"
import { DECREMENT, INCREMENT } from"../types"

export const increment = () =>{
    return {type: INCREMENT}
    
} 
export const decrement = () =>{
    return {type: DECREMENT}
    
} 

export const RNDIncrement = ( )=>{
    return{
        type:RNDINCREMENT,
        payload: Math.floor(Math.random()*25)
}
}
export const RNDDecrement = (payload)=>{
    return{
        type:RNDDECREMENT,
        payload,
}
}