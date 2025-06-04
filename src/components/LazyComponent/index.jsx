import React from "react";
import Loading from "@/components/Loading";

const LazyComponent = (LazyCom) => {
  return () => {
    return (
      <React.Suspense fallback={<Loading />}>
        <LazyCom />
      </React.Suspense>
    );
  };
};

export default LazyComponent;
