import { TextArea, TextField } from "@/components/Elements";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useState } from "react";
import { PROCESS_STATE } from "@/utils/constants";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Name is required")
    .min(5, "Name is too short"),
  email: yup.string().required("Email is required").email("Invalid email"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(5, "Subject is too short"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message is too short"),
});

const FormFeedback = () => {
  const initialValues = { fullName: "", email: "", subject: "", message: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [process, setProcess] = useState({
    message: "",
    state: PROCESS_STATE.IDLE,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProcess({
      message: "",
      state: PROCESS_STATE.IDLE,
    });
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setProcess({
      message: "",
      state: PROCESS_STATE.LOADING,
    });
    try {
      await schema.validate(formValues);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (!res.ok) throw new Error("Submission failed");
      setFormValues(initialValues);
      setProcess({
        message: "Response sent! Someone will contact you shortly.",
        state: PROCESS_STATE.SUCCESS,
      });
    } catch (error) {
      setProcess({ message: error.message, state: PROCESS_STATE.ERROR });
    }
  };
  return (
    <motion.div
      layout
      className="flex-1 w-full min-h-full bg-white border border-gray-100 shadow-xl dark:border-gray-700 rounded-2xl dark:bg-dark-bgSecondary"
    >
      <form
        className="flex flex-col gap-3 p-4 sm:p-6 lg:p-8"
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="fullName"
          label="Name"
          placeholder="Tony Stark"
          value={formValues.fullName}
          onChange={handleChange}
        />

        <TextField
          id="email"
          label="Email"
          placeholder="ironman@stark.com"
          value={formValues.email}
          onChange={handleChange}
        />

        <TextField
          id="subject"
          label="Subject"
          placeholder="Working with Robor"
          value={formValues.subject}
          onChange={handleChange}
        />

        <TextArea
          id="message"
          label="Message"
          placeholder="Let's build another Iron Man."
          value={formValues.message}
          onChange={handleChange}
        />

        <motion.button
          className="my-2 btn-primary btn-md disabled:bg-gray-500 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-primary-light dark:bg-dark-primary"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={process.state === PROCESS_STATE.LOADING}
        >
          SEND MESSAGE
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
