import { useStore } from '@/store'
import { View } from '@tarojs/components'
import { useState } from 'react'
import { AtTag } from 'taro-ui'
import styles from './index.module.scss'

export default function CategoryTabs() {
  const categorys = [
    { name: '卡通', id: '1' },
    { name: '数字', id: '2' },
    { name: '宇宙', id: '3' },
  ]
  const setImagesList = useStore((state) => state.setImagesList)
  const [active, setActive] = useState(categorys[0].id)
  function clickTag(id: string) {
    setActive(id)
    if (id === '1') {
      setImagesList(
        Array.from({ length: 7 }).map((_, i) => ({
          id: i,
          src: '',
          price: i,
          name: 'HA-' + (i + 1),
          category: '1',
          createDate: '',
        })),
      )
    } else {
      setImagesList([])
    }
  }
  return (
    <View className={styles.root}>
      {categorys.map((category) => (
        <AtTag
          key={category.id}
          active={active === category.id}
          className="labelTag"
          type="primary"
          size="small"
          onClick={() => clickTag(category.id)}
        >
          {category.name}
        </AtTag>
      ))}
    </View>
  )
}
