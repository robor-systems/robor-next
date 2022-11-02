import { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SolutionHeader from "../SolutionHeader";
import { BsDownload } from "react-icons/bs";
import { PROCESS_STATE } from "utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { useCookies } from "react-cookie";

const ImageGenerator = () => {
  const [cookies, setCookie] = useCookies(["rate_limit_count"]);
  const [loadingFeedback, setLoadingFeedback] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [process, setProcess] = useState({
    error: "",
    status: PROCESS_STATE.IDLE,
  });

  const variants = {
    visible: (i) => ({
      opacity: 1,
      width: `${i * 20}%`,
      transition: {
        duration: 0.5,
      },
    }),
    hidden: { opacity: 0, width: 0 },
  };

  const handleClick = async () => {
    const apiCount = cookies.rate_limit_count;

    // On api call set feedback msg to GENERATING IMAGE
    setLoadingFeedback("Generating Image...");
    setProcess({
      error: "",
      status: PROCESS_STATE.LOADING,
    });
    // AFTER 2secs set loading feedback message to PROCESSING
    setTimeout(() => {
      setLoadingFeedback("Processing...");
    }, 2000);
    try {
      // After 4secs set loading feedback message to LOADING SCREEN,
      //it'll be shown until the api send  a response

      // API takes around 5-8 secs

      setTimeout(() => {
        setLoadingFeedback("Loading screen...");
      }, 4000);

      const { data } = await axios.post(
        "/api/stable-diffusion",
        { prompt },
        {
          responseType: "arraybuffer",
        }
      );
      const blob = new Blob([data], { type: "image/png" });
      const countInt = parseInt(apiCount) + 1;
      var expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);
      if (apiCount) {
        setCookie("rate_limit_count", countInt, {
          expires: expiryDate,
          // domain: "robor.systems",
        });
      } else {
        setCookie("rate_limit_count", 1, {
          expires: expiryDate,
          // domain: "robor.systems",
        });
      }
      const url = URL.createObjectURL(blob);
      setPreviewImage(url);
      setLoadingFeedback("");
      setProcess({
        error: "",
        status: PROCESS_STATE.SUCCESS,
      });
    } catch (e) {
      const decoder = new TextDecoder();
      const errorMsg = decoder.decode(e.response.data);
      setLoadingFeedback("");
      if (
        errorMsg.includes(
          "Your organization does not have enough balance to request this action"
        )
      ) {
        setProcess({
          error: "We've reached our limit for now, please come back later.",
          status: PROCESS_STATE.ERROR,
        });
      } else {
        setProcess({
          error: errorMsg,
          status: PROCESS_STATE.ERROR,
        });
      }
    }
  };

  return (
    <>
      <div className="w-full mx-auto max-w-xs sm:max-w-[600px] ">
        <SolutionHeader
          heading="AI Image Generator"
          subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna. "
          className="text-light-content"
        />

        <div className="flex gap-x-10 items-start sm:items-center justify-between mb-2 mt-10">
          <p className="text-light-contentSecondary dark:text-dark-content text-lg ">
            Describe the image you want to create:
          </p>
          <div>
            <div className="text-[#6B7280] text-base dark:text-dark-content">
              {cookies.rate_limit_count ? cookies.rate_limit_count : 0}/5 images
            </div>
            <div className="w-[80px] h-[3px] relative bg-[#D9D9D9] rounded-[100px]">
              <motion.div
                className="bg-[#006A6F] absolute left-0 top-0 bottom-0 rounded-[100px]"
                custom={cookies.rate_limit_count}
                animate="visible"
                variants={variants}
              ></motion.div>
            </div>
          </div>
        </div>
        <motion.div layout>
          <TextareaAutosize
            placeholder="Ex: Spiderman riding a bicycle in new york city"
            onChange={(e) => setPrompt(e.target.value)}
            maxLength={500}
            className={
              "input-valid w-full bg-light-bgPrimary dark:bg-dark-bgPrimary dark:border-gray-700"
            }
          />
          {process.error && cookies.rate_limit_count !== 5 ? (
            <p className="text-red-500">{process.error}</p>
          ) : (
            parseInt(cookies.rate_limit_count) >= 5 && (
              <p className="text-red-500">
                We&apos;ve reached our limit for now, please come back later.
              </p>
            )
          )}
        </motion.div>
        <motion.div layout className="mt-2 mb-8">
          <button
            className="disabled:opacity-50 flex items-center rounded-lg  btn-md btn-primary dark:bg-dark-primary w-full text-center !px-6"
            onClick={handleClick}
            disabled={
              (process.status === PROCESS_STATE.LOADING) |
              !prompt |
              (cookies.rate_limit_count >= 5)
            }
          >
            {process.status === PROCESS_STATE.LOADING ? (
              <>
                <span className="inline-block w-full">{loadingFeedback}</span>
                <AiOutlineLoading3Quarters className="animate-spin" />
              </>
            ) : (
              <span className="inline-block w-full">GENERATE IMAGE</span>
            )}
          </button>
          {process.status === PROCESS_STATE.LOADING && (
            <p className="mt-2 text-[#6B7280] text-base2 dark:text-dark-content">
              Please wait with us while we’re generating the image, this might
              take 5-30 seconds.
            </p>
          )}
        </motion.div>

        {previewImage ? (
          <div className="pt-[100%] w-full relative">
            <Image src={previewImage} layout="fill" alt="generated-image" />
          </div>
        ) : (
          <>
            <div className="relative">
              <div className="pt-[100%] w-full bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-[2px] flex items-center justify-center"></div>
              <span className="text-[#AEAEAE] absolute h-fit w-fit top-0 bottom-0 left-0 right-0 m-auto">
                Your masterpiece here
              </span>
            </div>
          </>
        )}

        <div className="flex group  cursor-pointer  mt-4 font-semibold  items-center gap-x-2 text-lg text-light-primary dark:text-dark-primary">
          <BsDownload
            className={clsx(
              !previewImage ? "opacity-50" : "opacity-100",
              "font-bold text-xl text-light-primary dark:text-dark-primary"
            )}
          />
          <div className="w-fit relative flex">
            {previewImage ? (
              <>
                <a
                  // eslint-disable-next-line react/no-unknown-property
                  download={prompt}
                  href={previewImage}
                  className=" w-fit text-light-primary dark:text-dark-primary"
                >
                  DOWNLOAD IMAGE
                </a>
                <div className="absolute -bottom-2 w-0 inline-block  group-hover:w-full h-1 bg-light-primary dark:bg-dark-primary rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
              </>
            ) : (
              <button
                disabled
                className=" w-fit disabled:opacity-50 text-light-primary dark:text-dark-primary"
              >
                DOWNLOAD IMAGE
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
