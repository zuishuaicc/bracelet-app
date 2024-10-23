import { useStore } from '@/store'
import { Image, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export default function Candidate() {
  const updateSelectImgList = useStore((state) => state.updateSelectImgList)
  const imagesList = useStore((state) => state.imagesList)
  // const setImagesList = useStore((state) => state.setImagesList)
  // const [imagesList, setImagesList] = useState<BraceletInfo[]>([])
  function handleClick(imgInfo: BraceletInfo) {
    updateSelectImgList(imgInfo, 'add')
  }
  // useEffect(() => {
  //   setImagesList(
  //     Array.from({ length: 7 }).map((_, i) => ({
  //       id: i,
  //       src: '',
  //       price: i,
  //       name: 'HA-' + (i + 1),
  //       category: '1',
  //       createDate: '',
  //     })),
  //   )
  // }, [])
  return (
    <View className={styles.root}>
      <View className="candidate-container">
        {imagesList.map((item) => (
          <View className="candidate-item" key={item.id} onClick={() => handleClick(item)}>
            <Image className="candidate-item-img" src={`../../assets/images/HA-${item.id + 1}.png`}></Image>
          </View>
        ))}
      </View>
    </View>
  )
}
