<template>
  <a-layout class="home">
    <a-layout-sider class="layout-left">
      <div class="layout-left-logo">
        <img src="@/assets/logo.png" alt="" />
      </div>

      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout class="layout-right">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          ...
          <br />
          Really
          <br />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

export default {
  name: 'Home',

  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },

  setup() {
    const selectedKeys = ref('2')
    return {
      selectedKeys
    }
  }
}
</script>

<style lang="scss" scoped>
/* #components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
} */
.home {
  width: 100%;
  height: 100%;
  display: flex;
  .layout-left {
    height: 100%;
    overflow: auto;
    .layout-left-logo {
      width: 100px;
      height: 100px;
      margin: 15px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .layout-right {
    flex: 1;
  }
}
</style>
