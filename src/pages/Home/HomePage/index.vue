<template>
  <div class="Homepage">
    <!-- <h1>Homepage</h1> -->
    <div>
      <el-table :data="LogInData" border style="width: 100%" align="center">
        <el-table-column prop="username" label="登录账户" width="180"  align="center">
        </el-table-column>
        <el-table-column prop="lastLogin.ip" label="上次登入ip" width="180"  align="center">
        </el-table-column>
        <el-table-column prop="lastLogin.loginTime" label="上次登入时间"  align="center"> </el-table-column>
        <el-table-column prop="nowLogin.ip" label="本次登入ip"  align="center"> </el-table-column>
        <el-table-column prop="nowLogin.loginTime" label="本次登录时间"  align="center"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {getLoginLog} from "@/api/index.js"
export default {
  data() {
    return {
        LogInData :[],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
 mounted () {
    getLoginLog()
    .then(res=>{
        // console.log(res.data.data)
        this.LogInData = res.data.data
    }) 
    .catch(err=>{
        console.log(err)
    })
 },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>
<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>