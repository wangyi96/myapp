import {
  RECEIVE_HISTORY,
  RECEIVE_RIDDLETYPE,
  RECEIVE_RIDDLES
} from './type'

export default{
  [RECEIVE_HISTORY](state,{list}){
    state.historyDay = list
  },
  [RECEIVE_RIDDLETYPE](state,{types}){
    state.riddleType = types
  },
  [RECEIVE_RIDDLES](state,{riddles}){
    state.riddles = riddles
  }
}
