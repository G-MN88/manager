<template>
  <div class="loginBox">
    <div class="login">
      <!-- 表单 -->
      <h3 class="title">用户登录</h3>
      <div style="margin: 20px;"></div>
      <el-form label-position="top" label-width="80px">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-login" type="primary" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #314052;
  .loginBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login {
    width: 500px;
    height: 360px;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
    .title {
        text-align: center;
    }
    .btn-login {
        width: 100%;
    }
  }
}
</style>
