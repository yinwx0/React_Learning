import { View, Navigator, Text } from "@tarojs/components";
import "./index.scss";

const Api = () => {
  return (
    <View className="api-container">
      <Navigator url="/pages/contact/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">联系人</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/device/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">设备</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/bluetooth/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">蓝牙</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/clipboard/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">剪贴板</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/scan-code/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">扫码</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/webview/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">页面嵌套</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/network/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">网络请求</Text>
        </View>
      </Navigator>
    </View>
  );
};

export default Api;
