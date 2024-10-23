import useSortable from '@/hooks/useSortable'
import { useStore } from '@/store'
import { Image, Text, View } from '@tarojs/components'
import styles from './index.module.scss'

export default function Bracelet() {
  const selectImgList = useStore((state) => state.selectImgList)
  const setSelectImgList = useStore((state) => state.setSelectImgList)
  const { braceletRef } = useSortable()
  return (
    <View className={styles.root}>
      <View>
        <Text className="clear-btn" onClick={() => setSelectImgList([])}>
          清空
        </Text>
      </View>
      <View ref={braceletRef} className="bracelet-container">
        {selectImgList.map((item) => (
          <View key={item.id} className="bracelet-item">
            <Image className="bracelet-item-img" src={`../../assets/images/HA-${item.id + 1}.png`}></Image>
          </View>
        ))}
      </View>
    </View>
  )
}
