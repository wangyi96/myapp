import axios from 'axios'

export default {
  reqHistory(){
    return axios.post('http://route.showapi.com/119-42',"showapi_timestamp="+formatterDateTime()+"&showapi_appid=55199&showapi_sign=679fd230363649848a0d62c60c4686a6")
  }
}

function formatterDateTime() {
  var date=new Date()
  var month=date.getMonth() + 1
  var datetime = date.getFullYear()
    + ""// "年"
    + (month >= 10 ? month : "0"+ month)
    + ""// "月"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date
      .getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
      .getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
      .getSeconds());
  return datetime;
}
