import { ImageNext } from "@/components/Elements";
import Image from "next/image";

const ImagesProject = ({ images, imageCount }) => {
  return imageCount === 1 ? (
    <div className="relative h-full overflow-hidden">
      <div className="absolute right-[-50px] h-full">
        <Image
          src={images[0]}
          width="650px"
          height="720px"
          alt="image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  ) : (
    <div className="relative h-full overflow-hidden">
      {/* * Image one on top*/}
      <div className="absolute left-0 z-10 shadow-lg top-60">
        <Image
          src={images[0]}
          width="520px"
          height="1100px"
          alt="image"
          className="rounded-lg"
        />
      </div>
      {/* * Image two on bottom */}
      <div className="absolute right-[10px] shadow-lg top-[-210px]">
        <Image
          src={images[1]}
          width="520px"
          height="1100px"
          alt="image"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImagesProject;
