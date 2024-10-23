import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface StateProps {
  selectImgList: Array<BraceletInfo>
  setSelectImgList: (imgList: Array<BraceletInfo>) => void
  updateSelectImgList: (imgInfo: BraceletInfo, type: 'add' | 'del') => void
  imagesList: Array<BraceletInfo>
  setImagesList: (imagesList: Array<BraceletInfo>) => void
}
export const useStore = create(
  persist<StateProps>(
    (set) => ({
      selectImgList: [],
      setSelectImgList: (imgList) => set({ selectImgList: imgList }),
      updateSelectImgList: (imgInfo, type) =>
        set((state) => {
          switch (type) {
            case 'add':
              const hasAdd = state.selectImgList.some((img) => img.id === imgInfo.id)
              return {
                selectImgList: hasAdd ? state.selectImgList : [...state.selectImgList, imgInfo],
              }
            case 'del':
              return {
                selectImgList: state.selectImgList.filter((item) => item.id !== imgInfo.id),
              }
            default:
              return state
          }
        }),
      imagesList: [],
      setImagesList: (imagesList) => set({ imagesList: imagesList }),
    }),
    {
      name: 'bracelet-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
