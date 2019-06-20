// 导入请求
import request from "../require/http"

//抽取网络请求


// 获取表单数据
export function getTableData() {
    return request({
      url: 'v1/demos/list',
      method: 'get',
      
    })
  }
export function getSelectData(params) {
    return request({
      url: 'http://10.16.18.171:8090/qtw/api/v1/ib_repo_enquiries/list',
      method: 'get',
      params,
      
    })
  }
export function getData(params) {
    return request({
      url: 'http://10.16.18.171:8090/qtw/api/v1/ib_repo_enquiries/dict?dictKey=ib_repo_enquiry_ibcounter',
      method: 'get',
      params,
      
    })
  }