import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Brancelet from '@/pages/bracelet/index'

import 'taro-ui/dist/style/components/button.scss' // 按需引入
import styles from './index.module.scss'

export default function Index() {
  return (
    <View className={styles.root}>
      <Brancelet></Brancelet>
    </View>
  )
}
