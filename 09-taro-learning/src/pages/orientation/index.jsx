import { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const OrientationPage = () => {
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    // 检查设备方向监听的可用性
    Taro.startDeviceMotionListening({
      interval: "normal",
      success: () => {
        console.log("开始监听设备方向");
        // 监听设备方向变化
        Taro.onDeviceMotionChange((res) => {
          setOrientation({
            alpha: Math.round(res.alpha),
            beta: Math.round(res.beta),
            gamma: Math.round(res.gamma),
          });
        });
      },
      fail: (err) => {
        console.error("监听设备方向失败:", err);
        Taro.showToast({
          title: "设备可能不支持方向监听",
          icon: "none",
        });
      },
    });

    // 组件卸载时停止监听
    return () => {
      Taro.stopDeviceMotionListening({
        success: () => console.log("停止监听设备方向"),
      });
    };
  }, []);

  return (
    <View className="orientation-page">
      <View className="orientation-card">
        <Text className="card-title">设备方向数据</Text>
        <View className="data-item">
          <Text className="label">Alpha (绕Z轴旋转):</Text>
          <Text className="value">{orientation.alpha}°</Text>
        </View>
        <View className="data-item">
          <Text className="label">Beta (绕X轴旋转):</Text>
          <Text className="value">{orientation.beta}°</Text>
        </View>
        <View className="data-item">
          <Text className="label">Gamma (绕Y轴旋转):</Text>
          <Text className="value">{orientation.gamma}°</Text>
        </View>
      </View>

      <View className="tips">
        <Text className="tip-item">
          • Alpha: 设备绕垂直屏幕的轴旋转的角度 (0-360)
        </Text>
        <Text className="tip-item">
          • Beta: 设备绕横向轴旋转的角度 (-180-180)
        </Text>
        <Text className="tip-item">
          • Gamma: 设备绕纵向轴旋转的角度 (-90-90)
        </Text>
      </View>
    </View>
  );
};

export default OrientationPage;
