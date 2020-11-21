<template>
  <div class="login">
    <div class="left"></div>
    <div class="content  animate__bounceIn animate__animated">
      <div class="h1">
        <h1>后台管理系统</h1>
      </div>
      <div class="from">
        <!-- 输入框 提交 -->
        <el-form
          :model="userForm"
          status-icon
          :rules="rules"
          ref="userForm"
          label-width="100px"
          class="demo-userForm"
        >
          <el-form-item
            label="用户名"
            prop="username"
            @keyup.enter.native="submitForm('userForm')"
          >
            <el-input
              type="text"
              v-model="userForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
            @keyup.enter.native="submitForm('userForm')"
          >
            <el-input
              type="password"
              v-model="userForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 验证码 start-->
          <el-form-item
            label="验证码"
            prop="captcha"
            class="yzm"
            @keyup.enter.native="submitForm('userForm')"
          >
            <el-input
              type="captcha"
              v-model="userForm.captcha"
              autocomplete="off"
              class="captcha"
            >
            </el-input>
            <span
              class="captcha-svg"
              v-html="captchaSvg"
              @click="refreshCaptcha1"
            ></span>
          </el-form-item>
          <!-- 验证码 end -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('userForm')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 输入框 提交 -->
      </div>
    </div>
    <!-- video -->
    <div class="video">
      <video
        data-v-5ea9a656=""
        muted="muted"
        src="../../assets/video/bg_video.mp4"
        autoplay="autoplay"
        loop="loop"
        preload="auto"
        class="bg_video"
      ></video>
    </div>

    <!-- video -->
  </div>
</template>
<script>
import {
  login,
  getCaptcha,
  refreshCaptcha,
  verifyCaptcha
} from "@/api/index.js";
import { mapMutations } from "vuex";
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        callback("请输入用户名");
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        callback("请输入用密码");
      } else {
        callback();
      }
    };
    var validateCaptcha = (rule, value, callback) => {
      if (!value) {
        callback("请输入用验证码");
      } else {
        callback();
      }
    };
    return {
      userForm: {
        username: "",
        password: "",
        captcha: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        captcha: [{ validator: validateCaptcha, trigger: "blur" }]
      },
      captchaSvg: "" //验证码
    };
  },

  methods: {
    ...mapMutations(["SET_PERMISSION", "SET_TOKEN", "SET_USERINFO"]),
    //提交按钮
    submitForm(formName) {
      //开启表单验证
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { username, password, captcha } = this.userForm;
          //效验验证码
          let verifyRes = await verifyCaptcha(captcha);
          // console.log( verifyRes.data.state)
          if (!verifyRes.data.state) {
            this.$message.error("验证码错误");
            await this.refreshCaptcha1();
            return;
          }

          login(username, password)
            .then(res => {
              // console.log(res)
              // console.log(this.$message);
              if (res.data.state) {
                //登录成功
                //把请求到的信息放入vuex中
                let { permission, token, userInfo } = res.data;
                // console.log(permission, token, userInfo )
                localStorage.setItem(
                  "Administration-permission",
                  JSON.stringify(permission)
                );
                //一个坑，之前在这里json.stringify字符串，改了一晚上，吐了
                localStorage.setItem("Administration-token", token);
                localStorage.setItem(
                  "Administration-userInfo",
                  JSON.stringify(userInfo)
                );
                this.SET_PERMISSION(permission);
                this.SET_TOKEN(token);
                this.SET_USERINFO(userInfo);
                this.$message.success("登录成功");

                this.$router.push("/");
              } else {
                //登录失败
                this.$message.error("账号或者密码错误");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    },
    //获取验证码
    getCaptcha1() {
      getCaptcha()
        .then(res => {
          //  console.log(res);
          // console.log(res.data);
          if (res && res.data) {
            this.captchaSvg = res.data.img;
            // console.log(  this.captchaSvg)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //刷新验证码
    refreshCaptcha1() {
      refreshCaptcha()
        .then(res => {
          if (res && res.data) {
            this.captchaSvg = res.data.img;
            // console.log(  this.captchaSvg)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    //效验验证码
  },
  mounted() {
    this.getCaptcha1();
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .left {
    background: url("../../assets/imgs/bg2.png");
  }
  .content {
    width: 500px;
    height: 500px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    margin: 100px auto;
    border-radius: 30px;
    .h1 {
      text-align: center;
      /* display: flex; */
      color: #fff;
      margin: 20px;
      font-size: 16px;
      line-height: 50px;
      margin-top: 80px;
    }
    .from {
      margin-top: 40px;
      width: 80%;
    }
  }
  .bg_video {
    display: block;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
  }
  .canjiao {
    background-image: linear-gradient(
      to top,
      #ff9a9e 0%,
      #fecfef 99%,
      #fecfef 100%
    );
  }
}
</style>
