export default defineAppConfig({
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
    "scope.writePhotosAlbum": {
      desc: "你的相册权限将用于保存截屏图片",
    },
    "scope.screenRecord": {
      desc: "截屏功能需要使用屏幕录制权限",
    },
  },

  pages: [
    "pages/index/index",
    "pages/discover/index",
    "pages/profile/index",
    "pages/component/index",
    "pages/api/index",
    "pages/product/index",
    "pages/login/index",
    "pages/container/index",
    "pages/basic/index",
    "pages/form/index",
    "pages/skyline/index",
    "pages/media/index",
    "pages/map/index",
    "pages/location/index",
    "pages/contact/index",
    "pages/device/index",
    "pages/bluetooth/index",
    "pages/clipboard/index",
    "pages/scan-code/index",
    "pages/webview/index",
    "pages/movable-view/index",
    "pages/network/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#4594D5",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/tabs/home.png",
        selectedIconPath: "./assets/tabs/home-active.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/tabs/discover.png",
        selectedIconPath: "./assets/tabs/discover-active.png",
      },
      {
        pagePath: "pages/component/index",
        text: "组件",
        iconPath: "./assets/tabs/component.png",
        selectedIconPath: "./assets/tabs/component-active.png",
      },
      {
        pagePath: "pages/api/index",
        text: "API",
        iconPath: "./assets/tabs/api.png",
        selectedIconPath: "./assets/tabs/api-active.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/tabs/profile.png",
        selectedIconPath: "./assets/tabs/profile-active.png",
      },
    ],
  },
});
