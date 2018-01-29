import api from '../assets/index'
import {
  RECEIVE_HISTORY,
  RECEIVE_RIDDLETYPE,
  RECEIVE_RIDDLES
} from './type'

export default{
  getHistory({commit}){
    api.reqHistory().then(res => {
      let result = res.data
      if(result.showapi_res_code===0){
        let list = result.showapi_res_body
        //console.log(list)
        commit(RECEIVE_HISTORY,{list})
      }
    })
  },
  getRiddleType({commit}){
    api.reqRiddleType().then(res => {
      let result = res.data
      if(result.showapi_res_code===0){
        let types = result.showapi_res_body
        //console.log(types)
        commit(RECEIVE_RIDDLETYPE,{types})
      }
    })
  },
  getRiddle({commit},id){
    api.reqRiddle(id).then(res => {
      let result = res.data
      if(result.showapi_res_code===0){
        let riddles = result.showapi_res_body
        console.log(riddles)
        commit(RECEIVE_RIDDLES,{riddles})
      }
    })
  }
}
