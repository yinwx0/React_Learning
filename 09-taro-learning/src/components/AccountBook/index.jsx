import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import {
  AtList,
  AtListItem,
  AtFloatLayout,
  AtForm,
  AtInput,
  AtButton,
} from "taro-ui";

import "./index.scss";

/**
 * AccountBook组件 - 记账本
 * 实现了收支记录的添加和展示功能
 * 包含余额计算、记录列表展示等功能
 */
const AccountBook = () => {
  // 状态管理
  const [records, setRecords] = useState([]); // 记账记录列表
  const [isOpen, setIsOpen] = useState(false); // 添加记录浮层的显示状态
  const [amount, setAmount] = useState(""); // 金额输入
  const [description, setDescription] = useState(""); // 描述输入
  const [type, setType] = useState("expense"); // 记录类型（支出/收入）

  /**
   * 处理记录提交
   * 创建新的记账记录并添加到列表中
   */
  const handleSubmit = () => {
    if (!amount || !description) return;
    const newRecord = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      type,
      date: new Date().toLocaleDateString(),
    };
    setRecords([newRecord, ...records]);
    setIsOpen(false);
    setAmount("");
    setDescription("");
  };

  // 计算总余额
  const total = records.reduce((acc, curr) => {
    return curr.type === "expense" ? acc - curr.amount : acc + curr.amount;
  }, 0);

  return (
    <View className="account-book">
      <View className="header">
        <Text className="title">记账本</Text>
        <Text className="balance">余额: ¥{total.toFixed(2)}</Text>
      </View>

      <AtButton type="primary" onClick={() => setIsOpen(true)}>
        添加记录
      </AtButton>

      <AtList>
        {records.map((record) => (
          <AtListItem
            key={record.id}
            title={record.description}
            note={record.date}
            extraText={`${record.type === "expense" ? "-" : "+"}¥${
              record.amount
            }`}
          />
        ))}
      </AtList>

      <AtFloatLayout
        isOpened={isOpen}
        title="添加记录"
        onClose={() => setIsOpen(false)}
      >
        <AtForm>
          <AtInput
            name="amount"
            title="金额"
            type="number"
            value={amount}
            onChange={(value) => setAmount(value)}
          />
          <AtInput
            name="description"
            title="描述"
            type="text"
            value={description}
            onChange={(value) => setDescription(value)}
          />
          <AtButton type="primary" onClick={handleSubmit}>
            保存
          </AtButton>
        </AtForm>
      </AtFloatLayout>
    </View>
  );
};

export default AccountBook;
