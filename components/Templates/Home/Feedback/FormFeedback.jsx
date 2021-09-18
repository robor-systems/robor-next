import { TextArea, TextField } from "@/components/Elements";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiXCircle } from "react-icons/fi";

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
      className="w-full flex-1 min-h-full  rounded-2xl shadow-xl border border-gray-100  bg-white"
    >
      <form
        action=""
        className="flex flex-col gap-3 p-4 sm:p-6 lg:p-8"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <TextField
          id="fullName"
          label="Name"
          placeholder="Tony Stark"
          register={register}
          errors={errors}
          disabled
        />
        <TextField
          id="email"
          label="Email"
          placeholder="ironman@stark.com"
          register={register}
          errors={errors}
          disabled
        />
        <TextField
          id="subject"
          label="Subject"
          placeholder="Working with Robor"
          register={register}
          errors={errors}
          disabled
        />
        <TextArea
          id="message"
          label="Message"
          placeholder="Let's build another Iron Man."
          register={register}
          errors={errors}
          disabled
        />

        <h3 className="text-red-400 flex items-center gap-1">
          <FiXCircle className="text-lg" /> We are not accepting responses at
          this moment.
        </h3>
        <motion.button
          className="btn-primary btn-md my-2  disabled:bg-gray-500 cursor-not-allowed"
          // whileHover={{
          //   scale: 1.02,
          // }}
          // whileTap={{ scale: 0.9 }}
          type="submit"
          disabled
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FormFeedback;
