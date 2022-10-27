import { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SolutionHeader from "../SolutionHeader";
import { BsDownload } from "react-icons/bs";
import { PROCESS_STATE } from "utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageGenerator = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [message, setMessage] = useState("");
  const [process, setProcess] = useState({
    error: "",
    status: PROCESS_STATE.IDLE,
  });

  const handleClick = async () => {
    setProcess({
      error: "",
      status: PROCESS_STATE.LOADING,
    });
    try {
      const { data } = await axios.post(
        "/api/image-generator",
        { message },
        {
          responseType: "arraybuffer",
        }
      );
      const blob = new Blob([data], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setPreviewImage(url);
      setProcess({
        error: "",
        status: PROCESS_STATE.SUCCESS,
      });
    } catch (e) {
      const decoder = new TextDecoder();
      const errorMsg = decoder.decode(e.response.data);
      setProcess({
        error: errorMsg,
        status: PROCESS_STATE.ERROR,
      });
    }
  };

  return (
    <div className="w-full">
      <SolutionHeader
        heading="AI Image Generator"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna. "
        className="text-light-content"
      />
      <div>
        <p className="text-light-contentSecondary dark:text-dark-content text-lg mb-2 mt-10">
          Describe the image you want to create:
        </p>
        <motion.div layout>
          <TextareaAutosize
            placeholder="Ex: Spiderman riding a bicycle in new york city"
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            className={
              "input-valid w-full bg-light-bgPrimary dark:bg-dark-bgPrimary dark:border-gray-700"
            }
          />
          {process.error && <p className="text-red-500">{process.error}</p>}
        </motion.div>
        <button
          className="disabled:opacity-50 flex items-center rounded-lg my-8 btn-md btn-primary dark:bg-dark-primary w-full text-center !px-6"
          onClick={handleClick}
          disabled={(process.status === PROCESS_STATE.LOADING) | !message}
        >
          {process.status === PROCESS_STATE.LOADING ? (
            <>
              <span className="inline-block w-full">GENERATING IMAGE...</span>
              <AiOutlineLoading3Quarters className="animate-spin" />
            </>
          ) : (
            <span className="inline-block w-full">GENERATE IMAGE</span>
          )}
        </button>
      </div>
      {previewImage ? (
        <div className="h-[600px] w-full relative">
          <Image src={previewImage} layout="fill" alt="generated-image" />
        </div>
      ) : (
        <div className="h-[600px] w-full bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-[2px] flex items-center justify-center">
          <span className="text-[#AEAEAE]">Your masterpiece here</span>
        </div>
      )}

      <div className="flex group  cursor-pointer  mt-4 font-semibold opacity-50 items-center gap-x-2 text-lg text-light-primary dark:text-dark-primary">
        <BsDownload className="font-bold text-xl text-light-primary dark:text-dark-primary" />
        <div className="w-fit relative flex">
          {previewImage ? (
            <a
              // eslint-disable-next-line react/no-unknown-property
              download={message}
              href={previewImage}
              className=" w-fit text-light-primary dark:text-dark-primary"
            >
              DOWNLOAD IMAGE
            </a>
          ) : (
            <button
              disabled
              className=" w-fit disabled:opacity-50 text-light-primary dark:text-dark-primary"
            >
              DOWNLOAD IMAGE
            </button>
          )}

          <div className="absolute -bottom-2 w-0 inline-block  group-hover:w-full h-1 bg-light-primary dark:bg-dark-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
