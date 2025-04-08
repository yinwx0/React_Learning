import React, { useState } from "react";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import AccountBook from "../../components/AccountBook";
import MusicBox from "../../components/MusicBox";
import BusinessCard from "../../components/BusinessCard";

import "./index.scss";

const Discover = () => {
  const [activeModule, setActiveModule] = useState(null);

  const gridData = [
    {
      image:
        "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
      value: "记账本",
      key: "accountBook",
    },
    {
      image:
        "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
      value: "音乐盒子",
      key: "musicBox",
    },
    {
      image:
        "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
      value: "个人名片生成器",
      key: "businessCard",
    },
  ];

  const handleGridClick = (item, index) => {
    setActiveModule(item.key);
  };

  const renderModule = () => {
    switch (activeModule) {
      case "accountBook":
        return <AccountBook />;
      case "musicBox":
        return <MusicBox />;
      case "businessCard":
        return <BusinessCard />;
      default:
        return null;
    }
  };

  return (
    <View className="discover">
      <AtGrid data={gridData} onClick={handleGridClick} />
      {renderModule()}
    </View>
  );
};

export default Discover;
