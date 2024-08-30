import { MovableArea, MovableView, Text, View } from '@tarojs/components'
import Sortablejs from 'sortablejs'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

export default function Index() {
  const data = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    name: `${i}`,
  }))
  const braceletRef = useRef(null)
  const [listData, setListData] = useState(data)
  useEffect(() => {
    const sortable = new Sortablejs(braceletRef.current!, {
      animation: 150,
      onEnd: (e) => {
        console.log(e, listData)
      },
    })
  }, [])
  return (
    <View ref={braceletRef} className={styles.root}>
      {listData.map((item) => (
        <View key={item.id} className="bracelet-item">
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  )
}
