import { useEffect, useRef } from 'react'
import { useStore } from '@/store'

import Sortablejs, { SortableEvent } from 'sortablejs'

export default () => {
  const braceletRef = useRef(null)
  const setSelectImgList = useStore((state) => state.setSelectImgList)
  const selectImgList = useStore((state) => state.selectImgList)
  useEffect(() => {
    const sortable = new Sortablejs(braceletRef.current!, {
      animation: 200,
      onEnd: ({ newIndex, oldIndex }: SortableEvent) => {
        if (newIndex === oldIndex) return
        const list = [...selectImgList]
        const curRow = list.splice(oldIndex!, 1)[0]
        list.splice(newIndex!, 0, curRow)
        setSelectImgList(list)
      },
    })
    return () => {
      sortable.destroy()
    }
  }, [selectImgList])
  return {
    braceletRef,
  }
}
