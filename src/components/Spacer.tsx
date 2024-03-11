import React, { useMemo } from "react";

export default function Spacer({ size }: { size: number }) {
  const sizeVariants = useMemo(
    () =>
      ({
        4: "w-full h-4",
        10: "w-full h-10",
        16: "w-full h-16",
      }[size]),
    []
  );

  return <div className={sizeVariants}></div>;
}
