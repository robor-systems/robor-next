import { TextArea, TextField } from "@/components/Elements";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useState } from "react";
import { PROCESS_STATE } from "utils/constants";

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
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setProcess({
      message: "",
      state: PROCESS_STATE.LOADING,
    });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback-form", ...formValues }),
    };
    try {
      const valid = await schema.validate(formValues);

      fetch("/", options)
        .then((res) => {
          setFormValues(initialValues);
          setProcess({
            message: "Response sent! Someone will contact you shortly.",
            state: PROCESS_STATE.SUCCESS,
          });
        })
        .catch((error) =>
          setProcess({ message: error.message, state: PROCESS_STATE.ERROR })
        );
    } catch (error) {
      console.log(error);
      setProcess({ message: error.message, state: PROCESS_STATE.ERROR });
    }
  };
  return (
    <motion.div
      layout
      className="flex-1 w-full min-h-full bg-white border border-gray-100 shadow-xl dark:border-gray-700 rounded-2xl dark:bg-dark-bgSecondary"
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
