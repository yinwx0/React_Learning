import { View, Text, ScrollView } from "@tarojs/components";
import { GridView } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";

const SkylinePage = () => {
  // GridView 数据
  const gridData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `项目 ${i + 1}`,
    color: `hsl(${(i * 20) % 360}, 70%, 70%)`,
  }));

  // ScrollView 数据
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [listData, setListData] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      title: `列表项 ${i + 1}`,
      desc: `这是第 ${i + 1} 个列表项的描述信息`,
    }))
  );

  // 处理上拉加载
  const handleScrollToLower = async () => {
    if (loading) return;
    setLoading(true);

    // 模拟异步加载数据
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, i) => ({
        id: listData.length + i,
        title: `列表项 ${listData.length + i + 1}`,
        desc: `这是第 ${listData.length + i + 1} 个列表项的描述信息`,
      }));
      setListData([...listData, ...newData]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  // 处理下拉刷新
  const handlePullDownRefresh = async () => {
    setRefreshing(true);

    // 模拟异步刷新数据
    setTimeout(() => {
      const refreshedData = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        title: `刷新后的列表项 ${i + 1}`,
        desc: `这是刷新后的第 ${i + 1} 个列表项描述`,
      }));
      setListData(refreshedData);
      setPage(1);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View className="skyline-page">
      {/* GridView 示例 */}
      <View className="section">
        <Text className="section-title">GridView 组件</Text>
        <GridView
          className="grid-view"
          crossAxisCount={4}
          crossAxisGap={20}
          mainAxisGap={20}
        >
          {gridData.map((item) => (
            <View
              key={item.id}
              className="grid-item"
              style={{ backgroundColor: item.color }}
            >
              <Text className="grid-item-text">{item.title}</Text>
            </View>
          ))}
        </GridView>
      </View>

      {/* ScrollView 示例 */}
      <View className="section">
        <ScrollView
          className="list-view"
          scrollY
          enhanced
          showScrollbar={false}
          refresherEnabled
          refresherTriggered={refreshing}
          onRefresherRefresh={handlePullDownRefresh}
          onScrollToLower={handleScrollToLower}
        >
          {listData.map((item) => (
            <View key={item.id} className="list-item">
              <Text className="list-item-title">{item.title}</Text>
              <Text className="list-item-desc">{item.desc}</Text>
            </View>
          ))}
          {loading && (
            <View className="loading-text">
              <Text>正在加载更多...</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default SkylinePage;
