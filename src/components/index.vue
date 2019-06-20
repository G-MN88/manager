<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="id" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="visable" label="visable"></el-table-column>
  </el-table>
</template>

<script>
import { getSelectData,getData } from "../api/index";
import buildFilterParams from "../buildFilterParams/buildFilterParams";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
       let params = {

      enquiryCode: 'IBRR1906050000000003',
      
    };
    let queryParams = buildFilterParams(params);
      window.localStorage.setItem('token','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoiYWRtaW4iLCJpcCI6IjEwLjAuNzQuMjEwIiwicm9sZUNvZGVzIjoiYWRtaW4iLCJtYWMiOm51bGwsImNvbXBhbnlJZCI6MSwicm9sZUlkcyI6IjEiLCJsb2dpblRpbWUiOjE1NjA5MTM2OTg5MzYsImxvZ2luTmFtZSI6ImFkbWluIiwibmFtZSI6IllXUnRhVzQ9IiwiaWQiOjEsImV4cCI6MTU2MTAwMDA5ODk0MCwicm9sZU5hbWVzIjoi6LaF57qn566h55CG5ZGYIn0._4tHmm5Z_sKw9BbXIVci0YeV560YJKDiaa-bjolYQmI')
    getSelectData({query: JSON.stringify(queryParams)}).then(res => {
      console.log(res);
    //   this.tableData = res.data.data.list;
    });

    let bbb = {
      
    }
    let queryParam = buildFilterParams(bbb);
    getData({query: JSON.stringify(queryParam)}).then(res => {
      console.log(res);
    //   this.tableData = res.data.data.list;
    });

   
  }
};
</script>

<style>
</style>
