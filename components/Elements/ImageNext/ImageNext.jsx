import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ImageNext = ({ src, alt, className, forwardedRef }) => {
  return (
    <div className={clsx("relative", className)} ref={forwardedRef}>
      <Image
        placeholder="blur"
        blurDataURL={src}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default ImageNext;
