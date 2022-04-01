import { TextArea, TextField } from "@/components/Elements";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { PROCESS_STATE } from "utils/constants";

const schema = yup.object().shape({
  fullName: yup.string().min(5, "Too short").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  subject: yup.string().min(5, "Too short").required("Required"),
  message: yup.string().min(10, "Too short").required("Required"),
});

const FormFeedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [process, setProcess] = useState({
    message: "",
    state: PROCESS_STATE.IDLE,
  });

  const handleSubmitForm = async (data) => {
    try {
      setProcess({
        message: "",
        state: PROCESS_STATE.LOADING,
      });

      await axios.post(
        "/",
        Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&"),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      setProcess({
        message: "Response sent! Someone will contact you shortly.",
        state: PROCESS_STATE.SUCCESS,
      });

      reset();
    } catch (error) {
      setProcess({ message: error.message, state: PROCESS_STATE.ERROR });
    }
  };

  return (
    <motion.div
      layout
      className="w-full flex-1 min-h-full  rounded-2xl shadow-xl border border-gray-100  bg-white"
    >
      <form
        name="feedback-form"
        className="flex flex-col gap-3 p-4 sm:p-6 lg:p-8"
        onSubmit="submit"
        method='POST'
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="feedback-form" />

        <TextField
          id="fullName"
          label="Name"
          placeholder="Tony Stark"
          register={register}
          errors={errors}
        />

        <TextField
          id="email"
          label="Email"
          placeholder="ironman@stark.com"
          register={register}
          errors={errors}
        />

        <TextField
          id="subject"
          label="Subject"
          placeholder="Working with Robor"
          register={register}
          errors={errors}
        />

        <TextArea
          id="message"
          label="Message"
          placeholder="Let's build another Iron Man."
          register={register}
          errors={errors}
        />

        <motion.button
          className="btn-primary btn-md my-2  disabled:bg-gray-500 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-primary-light"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={process.state === PROCESS_STATE.LOADING}
        >
          Send Message
        </motion.button>
        {(process.state === PROCESS_STATE.SUCCESS ||
          process.state === PROCESS_STATE.ERROR) && (
          <h4
            className={
              process.state === PROCESS_STATE.SUCCESS
                ? "text-green-700"
                : "text-red-700"
            }
          >
            {process.message}
          </h4>
        )}
      </form>
    </motion.div>
  );
};

export default FormFeedback;
