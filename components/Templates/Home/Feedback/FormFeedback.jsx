import { TextArea, TextField } from "@/components/Elements";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <motion.div
      layout
      className="w-full flex-1 min-h-full  rounded-2xl shadow-xl border border-gray-100  bg-white "
    >
      <form
        action=""
        className="flex flex-col gap-3 p-4 sm:p-6 lg:p-8"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <TextField
          id="fullName"
          label="Name"
          placeholder="John Doe"
          register={register}
          errors={errors}
        />
        <TextField
          id="email"
          label="Email"
          placeholder="johndoe@example.com"
          register={register}
          errors={errors}
        />
        <TextField
          id="subject"
          label="Subject"
          placeholder="Your subject"
          register={register}
          errors={errors}
        />
        <TextArea
          id="message"
          label="Message"
          placeholder="Your Message"
          register={register}
          errors={errors}
        />
        <motion.button
          className="btn-primary btn-md my-2 "
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Get in touch
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FormFeedback;
