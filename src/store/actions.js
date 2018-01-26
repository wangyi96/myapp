import api from '../assets/index'

export default{
  getHistory({commit}){
    api.reqHistory().then(res => {
      let result = res.data
      console.log(result)
    })
  }
}
