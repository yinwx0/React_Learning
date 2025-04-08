import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtForm, AtInput } from "taro-ui";

import "./index.scss";

/**
 * BusinessCard组件 - 名片生成器
 * 实现了名片信息的编辑和实时预览功能
 * 包含姓名、职位、公司、联系方式等信息的编辑
 */
const BusinessCard = () => {
  // 状态管理：名片信息
  const [cardInfo, setCardInfo] = useState({
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    address: "",
  });

  /**
   * 处理输入框变化
   * @param {string} field - 要更新的字段名
   * @param {string} value - 新的字段值
   */
  const handleInputChange = (field, value) => {
    setCardInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View className="business-card">
      <View className="editor">
        <AtForm>
          <AtInput
            name="name"
            title="姓名"
            type="text"
            placeholder="请输入姓名"
            value={cardInfo.name}
            onChange={(value) => handleInputChange("name", value)}
          />
          <AtInput
            name="title"
            title="职位"
            type="text"
            placeholder="请输入职位"
            value={cardInfo.title}
            onChange={(value) => handleInputChange("title", value)}
          />
          <AtInput
            name="company"
            title="公司"
            type="text"
            placeholder="请输入公司名称"
            value={cardInfo.company}
            onChange={(value) => handleInputChange("company", value)}
          />
          <AtInput
            name="phone"
            title="电话"
            type="phone"
            placeholder="请输入电话"
            value={cardInfo.phone}
            onChange={(value) => handleInputChange("phone", value)}
          />
          <AtInput
            name="email"
            title="邮箱"
            type="email"
            placeholder="请输入邮箱"
            value={cardInfo.email}
            onChange={(value) => handleInputChange("email", value)}
          />
        </AtForm>
      </View>

      <View className="preview">
        <View className="card-preview">
          <View className="card-content">
            <Text className="name">{cardInfo.name || "姓名"}</Text>
            <Text className="title">{cardInfo.title || "职位"}</Text>
            <View className="divider" />
            <Text className="company">{cardInfo.company || "公司名称"}</Text>
            <Text className="contact">{cardInfo.phone || "电话"}</Text>
            <Text className="contact">{cardInfo.email || "邮箱"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusinessCard;
