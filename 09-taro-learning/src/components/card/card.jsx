import { View, Text, Image } from '@tarojs/components'
import './Card.scss'

const Card = ({ userInfo }) => {
    return (
        <View className="card-container">
            <View className="card">
                <Image
                    className="avatar"
                    src="https://public-cdn-oss.mosoteach.cn/avatar/2023/2E/e37ec338466725ce05a5007f958fae99.jpg?v=1693560293&x-oss-process=style/s300x300" // 固定头像路径
                    mode="aspectFill"
                />
                <View className="info">
                    <Text className="name">{userInfo.name}</Text>
                    <Text className="title">{userInfo.title} @ {userInfo.company}</Text>
                    <View className="divider" />
                    <Text className="contact">电话: {userInfo.phone}</Text>
                    <Text className="contact">邮箱: {userInfo.email}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card