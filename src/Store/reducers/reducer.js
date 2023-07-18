import { DECREMENT, INCREMENT, RNDDECREMENT, RNDINCREMENT } from "../types"

const initialState = {
    count: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:
            const result = state.count + 1
            return { ...state, count: result }

        case DECREMENT:
            const res = state.count - 1
            return { ...state, count: res }
            case RNDINCREMENT:
                const inc = state.count + action.payload
                return{...state, count: inc}

                case RNDDECREMENT:
                    const dec = state.count - action.payload
                    return{...state, count: dec}
        default:
            return state
    }
}

export default reducer