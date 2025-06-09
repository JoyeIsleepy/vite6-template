import React from "react";
import useStore from "@/store";

export default function index() {
  const bears = useStore((state) => state.bears);
  return (
    <div>
      ModuleA：测试store
      {bears}
      <button onClick={() => useStore.setState({ bears: bears + 1 })}>增加</button>
      <button onClick={() => useStore.setState({ bears: bears - 1 })}>减少</button>
    </div>
  );
}
