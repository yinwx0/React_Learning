import { View, Navigator, Text } from "@tarojs/components";

import "./index.scss";

const Component = () => {
  return (
    <View className="component-container">
      <Navigator url="/pages/container/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">容器</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/basic/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">基础内容</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/form/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">表单组件</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/skyline/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">skyline</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/media/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">媒体组件</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/map/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">地图</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/location/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">定位</Text>
        </View>
      </Navigator>
      <Navigator url="/pages/movable-view/index" className="nav-item">
        <View className="nav-item-content">
          <Text className="nav-text">movable-view</Text>
        </View>
      </Navigator>
    </View>
  );
};

export default Component;
