import React from "react";
import Loading from "@/components/Loading";

const LazyComponent = (resolvePath) => {
  const Component = React.lazy(async () => await import(`@/${resolvePath}`));
  return () => {
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    );
  };
};

export default LazyComponent;
