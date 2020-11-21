<template>
  <div class="studentProject">
    <h1>studentProject 学员项目管理</h1>
    <div class="searchAdd">
      <el-select
        v-model="nameValue"
        @change="searchTextChange"
        @blur="blurTextChange"
        clearable
        filterable
        remote
        reserve-keyword
        placeholder="请输入姓名,如果不更新,点击右侧搜索按钮"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in optionsName"
          :key="item.sid"
          :label="item.name"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        icon="el-icon-search"
        class="aaa"
        @click="btnSearchName"
        >搜索</el-button
      >
      <el-button
        type="primary"
        @click="addStu"
        :disabled="PermissionButton('add')"
        >添加项目</el-button
      >
    </div>
    <!-- 添加学员表单 start-->
    <div class="from">
      <el-dialog title="增加学员信息" :visible.sync="dialogFormVisible">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="头像">
            <el-upload
              class="uploadAvatar"
              ref="uploadAvatar"
              action="http://chst.vip/students/uploadStuAvatar"
              list-type="picture-card"
              :on-success="uploadSuccess"
              :on-remove="removeAvatar"
              :limit="1"
              name="headimgurl"
              :multiple="false"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="项目地址" prop="productUrl">
            <el-input v-model="ruleForm.productUrl"></el-input>
          </el-form-item>
          <el-form-item label="班级" prop="class">
            <el-input v-model="ruleForm.class"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item label="城市" prop="city">
            <el-input v-model="ruleForm.city"></el-input>
          </el-form-item>
          <el-form-item label="学历" prop="degree">
            <el-input v-model="ruleForm.degree"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input v-model="ruleForm.description"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 添加学员表单 end-->
    <div class="choiceClass">
      <span> 选择班级：</span>
      <el-select
        v-model="classValue"
        placeholder="请选择"
        @visible-change="classVisible"
        @change="classChange"
      >
        <el-option
          v-for="(item, index) in classOptions"
          :key="index"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
    <div class="export">
      <el-button plain @click="exportExcel">
        <span class="iconfont icon-Excel"></span>
        导出excel数据
      </el-button>
    </div>
    <div class="table">
      <el-table :data="studentInfo" border style="width: 100%" align="center">
        <el-table-column
          prop="headimgurl"
          label="头像"
          width="100"
          align="center"
        >
          <template scope="scope">
            <!-- {{scope.row.avatarUrl}}
          {{scope.row}}
          {{scope.avatarUrl.headimgurl}} -->
            <!-- {{studentInfo.headimgurl}} -->
            <img
              :src="scope.row.headimgurl"
              width="120"
              alt=""
              v-if="scope.row.headimgurl != ''"
            />

            <span class="icon-xueyuan iconfont" v-else></span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="class" label="班级" width="200" align="center">
        </el-table-column>
        <el-table-column prop="productUrl" label="项目" align="center">
        </el-table-column>

        <el-table-column prop="address" label="操作" align="center">
          <template scope="scope">
            <el-button
              type="primary"
              icon="el-icon-view"
              @click="$router.push({ name: 'studentProfile' })"
              :disabled="PermissionButton('read')"
            >
              查看</el-button
            >
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="editStu(scope.row)"
              :disabled="PermissionButton('edit')"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="delStu(scope.row)"
              :disabled="PermissionButton('delete')"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 start -->
    <div class="paging">
      <el-pagination
        :total="total"
        background
        hide-on-single-page
        layout="prev, pager, next"
        @current-change="changePage"
        :page-size="dataCount"
        :current-page.sync="currentPage"
      >
      </el-pagination>
    </div>
    <!-- 分页 end -->
  </div>
</template>
<script>
import {
  getStuList,
  updateStu,
  delStu,
  addStuDetail,
  searchStu,
  getClasses
} from "@/api/index.js";
import { mapState } from "vuex";
import qee from "qf-export-excel"; //导出文档插件
export default {
  computed: {
    ...mapState(["permission"])
  },
  data() {
    return {
      optionsName: [], //发送请求返回的符合搜索的学生信息
      nameValue: "", //搜索姓名的值
      blurValue: "", //失去焦点的值
      list: [],
      loading: true,
      states: [],
      studentInfo: [], //学员信息
      params: {
        page: 1,
        count: 5,
        class: ""
      }, //请求学员信息分页数据
      dataPage: 1, // 页码
      dataCount: 5, //每页展示的数量
      total: 100, //总共的数据条数
      currentPage : 1,//当前页
      dialogFormVisible: false, //弹出框
      ruleForm: {
        name: "",
        productUrl: "",
        headimgurl: "",
        class: "",
        age: "",
        city: "",
        degree: "",
        description: ""
      }, //表单信息
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        productUrl: [
          { required: true, message: "请输入项目地址", trigger: "blur" }
        ],
        class: [{ required: true, message: "请输入班级", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        city: [{ required: true, message: "请输入城市", trigger: "blur" }],
        degree: [
          { required: true, message: "请输入请输入学历", trigger: "blur" }
        ],
        description: [
          { required: true, message: "请输入描述", trigger: "blur" }
        ]
      }, //表单信息验证
      formLabelWidth: "120px",
      SendRequest: {
        fn: updateStu,
        list: "update"
      },
      classValue: "", //班级搜索框的值
      classOptions: ["全部"], //选择班级的选择框
      nameParams: {
        key: "",
        count: 5,
        page: 1
      } //用名字分类
    };
  },
  methods: {
    //修改学员信息
    editStu(scope) {
      console.log(scope);
      //   updateStu()
      //   .then(res=>{
      //       console.log(res.data)
      //   })
    },
    //删除学员信息
    delStu(scope) {
      console.log(scope);
      delStu(scope.sId).then(res => {
        // console.log(res.data);
        if (res.data && res.data.state) {
          this.$message.success("删除成功");
        } else {
          this.$message.error("删除出错");
        }
        this.getStuList2();
      });
    },
    //获取用户信息
    getStuList2() {
      getStuList(this.params).then(res => {
        //   console.log(res.data.data);
        // console.log(this.studentInfo);
        // console.log(res.data.total  )
        // console.log(res.data)
        this.studentInfo = res.data.data; //把获取到的用户信息存储起来
        this.total = res.data.total;
      });
    },
    //远程搜索方法，触发的函数
    remoteMethod(query) {
      //搜索姓名输入值，触发的函数
      // console.log( 1 , "1")
      // console.log(query);
      if (!query) {
        this.params = {
          page: 1,
          count: 5,
          class: ""
        };
        this.currentPage = 1
        this.getStuList2();
      }
      this.params = {
        key: query
      };
      this.loading = true;
      this.blurValue = query;
      searchStu(this.params).then(res => {
        if (res.data && res.data.state) {
          this.loading = false;
          // console.log(res.data.data)
          this.optionsName = res.data.data;
        } else {
          //请求出错
          this.$message.error("搜索出错");
        }
      });
    },
    //搜索姓名的值发生改变
    searchTextChange(searchText) {
      //  console.log( 2 , "2")
      // console.log(searchText);
      if (!searchText) {
        this.params = {
          page: 1,
          count: 5,
          class: ""
        };
        this.getStuList2();
        return;
      } else {
        this.params.key = searchText;
        searchStu(this.params).then(res => {
          // console.log(res.data.data)
          this.studentInfo = res.data.data; //把获取到的用户信息存储起来
          this.total = res.data.total;
          console.log(res);
        });
      }
    },
    //失去焦点，保存输入框的值
    blurTextChange() {
      //  console.log( 3 , "3")
      this.nameValue = this.blurValue;
      // console.log(this.nameValue)
      // console.log(22)
    },
    //按搜索键搜索
    btnSearchName() {
       this.currentPage = 1
      //  console.log( 4 , "4")
      if (!this.nameValue) {
        this.params = {
          page: 1,
          count: 5,
          class: ""
        };
        console.log(  this.currentPage)
      
        this.getStuList2();
        return;
      } else {
        this.params = {
          key: this.nameValue,
          count: 5,
          page: 1
        };
        searchStu(this.params).then(res => {
          // console.log(res.data.total);
          this.studentInfo = res.data.data; //把获取到的用户信息存储起来
          this.total = res.data.total;
        });
      }
    },
    //添加学员的按钮
    addStu() {
      // console.log(1);
      this.dialogFormVisible = true;
      this.SendRequest = {
        fn: addStuDetail,
        list: "add"
      };
    },
    //表单提交按钮,//添加学员信息， 或者修改学员信息
    submitForm() {
      this.dialogFormVisible = false;
      // console.log(this.ruleForm)
      if (
        !this.ruleForm.name ||
        !this.ruleForm.productUrl ||
        !this.ruleForm.class ||
        !this.ruleForm.age ||
        !this.ruleForm.city ||
        !this.ruleForm.degree ||
        !this.ruleForm.description
      ) {
        return;
      } else {
        let name;
        if (this.SendRequest.list == "add") {
          name = {
            ok: "添加成功",
            no: "添加失败"
          };
        } else if (this.SendRequest.list == "update") {
          name = {
            ok: "修改成功",
            no: "修改失败"
          };
        }
        this.SendRequest.fn(this.ruleForm).then(res => {
          // console.log(res.data)
          if (res.data && res.data.state) {
            this.$message.success(name.ok);
          } else {
            this.$message.error(name.no);
          }
          this.getStuList2();
        });
        this.ruleForm = {
          name: "",
          productUrl: "",
          headimgurl: "",
          class: "",
          age: "",
          city: "",
          degree: "",
          description: ""
        };
        this.$refs["uploadAvatar"].clearFiles(); //清空上传文件
      }
    },
    //上传头像
    uploadSuccess(r) {
      // 上传成功 给stuForm添加一条 headimgurl的属性
      // console.log(r);
      this.ruleForm.headimgurl = r.headimgurl;
    },
    removeAvatar(r) {
      this.ruleForm.headimgurl = "";
    },
    //编辑用户
    editStu(scope) {
      console.log(scope);
      this.ruleForm = { ...scope };
      this.SendRequest = {
        fn: updateStu,
        list: "update"
      };
      this.dialogFormVisible = true;
    },
    //班级选择
    classVisible(query) {
      // console.log("班级选择")
      // console.log(query)
      getClasses().then(res => {
        // console.log(res.data.data);
        if (res.data && res.data.state) {
          this.classOptions = ["全部", ...res.data.data];
        } else {
          this.$message.error("选择错误");
        }
      });
    },
    //班级改变
    classChange(query) {
       this.currentPage = 1
      if (query === "全部") {
        this.params = {
          page: 1,
          count: 5,
          class: ""
        };
        this.getStuList2();
      } else {
        this.params = {
          page: 1,
          count: 5,
          class: query
        };
        this.getStuList2();
      }
    },
    //导出excel
    exportExcel() {
      // console.log(1)
      //需要导出的文件tr>th

      let titleList = [
        {
          title: "头像",
          key: "headimgurl"
        },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "班级",
          key: "class"
        },
        {
          title: "项目",
          key: "productUrl"
        },
        {
          title: "id",
          key: "_id"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "城市",
          key: "city"
        },
        {
          title: "描述",
          key: "description"
        },
        {
          title: "sId",
          key: "sid"
        }
      ];
      let dataSource;
      getStuList({}).then(res => {
        console.log(res.data);
        if (res.data && res.data.state) {
          dataSource = res.data.data;
          qee(titleList, dataSource, "学员数据");
        } else {
        }
      });

      //titleList,dataSource,需要导出的文件,'学员数据':导出文件的描述
    },
    //权限按钮
    PermissionButton(option) {
      // console.log(option, "1")
      // console.log(this.permission.buttons);
      let flag = this.permission.buttons.includes(option);
      // console.log(flag);
      return !flag;
    },
    //分页
    //分页器，点击页码触发的函数
    changePage(page) {
      // console.log( this.currentPage)
      // console.log(page);
      this.params.page = page;
      this.getStuList2();
      // updateStuTable()
    }
  },
  mounted() {
    this.params = {
      page: 1,
      count: 5,
      class: ""
    };
    this.getStuList2();
  }
};
</script>
<style lang="scss" scoped>
.studentProject {
  h1 {
    line-height: 50px;
  }
  .searchAdd {
    margin: 30px 0px;
    .el-select {
      margin-right: 10px;
    }
    .el-button.el-button--primary.aaa {
      //     color: #FFF;
      // background-color: #409EFF;
      // border-color: #409EFF;
      color: #409eff !important;
      background-color: #fff !important;
      border-color: #409eff;
    }
    .el-button {
    }
    button {
      width: 65px !important;
      height: 25px !important;
      padding: 0 !important;
    }
  }
  .choiceClass {
    margin: 40px 0;
  }
  .export {
    text-align: right;
    margin: 40px 20px;
    .el-button:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    .icon-Excel {
      color: green;
    }
  }
  .table {
    width: 100%;
    .el-table .cell {
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
      line-height: 23px;
      padding-right: 10px;
      img {
        width: 50px;
        height: 50px;
        display: block;
        margin: auto;
        vertical-align: middle;
      }
      span.iconfont {
        display: block;
        margin: auto;
        vertical-align: middle;
      }
    }
  }
}
.studentProject {
  .el-button.el-button--primary.aaa:hover {
    color: #fff !important;
    background-color: #409eff !important;
    border-color: #409eff !important;
  }
}
.home {
  .el-table td {
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
  }
}
.cell button {
  width: 65px !important;
  height: 25px !important;
  padding: 0 !important;
}
.from {
  position: flex;
}
.paging {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  text-align: center;
  margin: 50px auto;
}
</style>