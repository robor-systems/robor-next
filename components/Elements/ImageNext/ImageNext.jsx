import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ImageNext = ({
  src,
  alt,
  className,
  objectFit = "contain",
  blur,
  forwardedRef,
}) => {
  return (
    <div className={clsx("relative", className)} ref={forwardedRef}>
      <Image
        placeholder={blur ? "blur" : "empty"}
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
      />
    </div>
  );
};

export default ImageNext;
