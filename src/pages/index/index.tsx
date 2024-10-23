import Brancelet from '@/pages/bracelet/index'
import Candidate from '@/pages/candidate/index'
import CategoryTabs from '@/pages/category-tabs/index'
import { View } from '@tarojs/components'

import 'taro-ui/dist/style/components/button.scss' // 按需引入
import styles from './index.module.scss'

export default function Index() {
  return (
    <View className={styles.root}>
      <Brancelet></Brancelet>
      <Candidate></Candidate>
      <CategoryTabs></CategoryTabs>
    </View>
  )
}
