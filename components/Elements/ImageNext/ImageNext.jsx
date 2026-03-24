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
  priority,
}) => {
  return (
    <div className={clsx("relative", className)} ref={forwardedRef}>
      <Image
        placeholder={blur ? "blur" : "empty"}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit }}
        priority={priority}
      />
    </div>
  );
};

export default ImageNext;
