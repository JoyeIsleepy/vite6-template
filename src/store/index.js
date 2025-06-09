import { create } from "zustand";

const useStore = create((set, get) => ({
  bears: 0,
  honey: 0,
  // 获取蜂蜜数量
  getHoneyCount: () => {
    // 在action中使用get读取状态
    const bears = get().bears;
    set({ honey: bears });
  }, 
}));

export default useStore;