import { MovableArea, MovableView, Text, View } from '@tarojs/components'
import styles from './index.module.scss'

export default function index() {
  const data = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    name: `${i}`,
  }))
  return (
    // <View >
    //   {data.map((item) => (
    //     <View key={item.id} className="bracelet-item">
    //       <Text>{item.name}</Text>
    //     </View>
    //   ))}
    // </View>
    <MovableArea className={styles.root}>
      {data.map((item) => {
        return (
          <MovableView
            inertia
            className="bracelet-item"
            direction="all"
            key={item.id}
            x={item.id * 50}
          ></MovableView>
        )
      })}
    </MovableArea>
  )
}
