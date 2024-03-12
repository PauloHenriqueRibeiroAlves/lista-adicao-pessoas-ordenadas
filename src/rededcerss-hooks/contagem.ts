import { useReducer } from "react"


type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}
 
const initialState = {count: 0}

const reducer = (state: reducerState, action: reducerAction) => {
  switch(action.type){
    case 'ADD':
    return {...state, count: state.count + 1};
    break;
    case 'DEL':
      if(state.count > 0){
        return {...state, count: state.count - 1};
      }
    break;
    case 'REST':
      return initialState;
    break;
  }
  return state;
}
export const useConntagem = () => {
    return useReducer (reducer, initialState)
}