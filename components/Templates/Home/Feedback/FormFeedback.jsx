import { TextArea, TextField } from "@/components/Elements";
import { motion } from "framer-motion";

const FormFeedback = () => {
  return (
    <div className="w-full flex-1 min-h-full  rounded-2xl shadow-xl border border-gray-100  backdrop-blur-md  ">
      <form
        action=""
        className="flex flex-col gap-3 p-4 sm:p-6 lg:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField id="fullName" label="Name" placeholder="John Doe" />
        <TextField id="email" label="Email" placeholder="johndoe@example.com" />
        <TextField id="subject" label="Subject" placeholder="Your subject" />
        <TextArea id="message" label="Message" placeholder="Your Message" />
        <motion.button
          className="btn-primary btn-md my-2 "
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.9 }}
        >
          Get in touch
        </motion.button>
      </form>
    </div>
  );
};

export default FormFeedback;
