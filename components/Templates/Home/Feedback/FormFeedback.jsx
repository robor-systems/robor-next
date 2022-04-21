import { TextArea, TextField } from "@/components/Elements";
import { motion } from "framer-motion";
import { set, useForm } from "react-hook-form";
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
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const initialValues = {fullName: '', email: '', subject: '', message: ''};

  const [formValues, setFormValues] = useState(initialValues) 

  const [process, setProcess] = useState({
    message: "",
    state: PROCESS_STATE.IDLE,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormSubmit = async (e) => {
    //e.preventDefault();
    setProcess({
      message: "",
      state: PROCESS_STATE.LOADING,
    });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback-form", ...formValues }),
    };
    fetch("/", options)
      .then((res) => window.location.assign('/contact-thanks/'))
      .catch((error) =>
        setProcess({ message: error.message, state: PROCESS_STATE.ERROR })
      );

    setProcess({
      message: "Response sent! Someone will contact you shortly.",
      state: PROCESS_STATE.SUCCESS,
    });
  };
  return (
    <motion.div
      layout
      className="w-full flex-1 min-h-full rounded-2xl shadow-xl border border-gray-100  bg-white"
    >
      <form
        name="feedback-form"
        className="flex flex-col gap-3 p-4 sm:p-6 lg:p-8"
        data-netlify="true"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="feedback-form" />

        <TextField
          id="fullName"
          label="Name"
          placeholder="Tony Stark"
          //register={register}
          //errors={errors}
          value={formValues.fullName}
          onChange={handleChange}
        />

        <TextField
          id="email"
          label="Email"
          placeholder="ironman@stark.com"
          //register={register}
          //errors={errors}
          value={formValues.email}
          onChange={handleChange}
        />

        <TextField
          id="subject"
          label="Subject"
          placeholder="Working with Robor"
          //register={register}
          //errors={errors}
          value={formValues.subject}
          onChange={handleChange}
        />

        <TextArea
          id="message"
          label="Message"
          placeholder="Let's build another Iron Man."
          //register={register}
          //errors={errors}
          value={formValues.message}
          onChange={handleChange}
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
