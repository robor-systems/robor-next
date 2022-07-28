import clsx from "clsx";
import { motion } from "framer-motion";

const TextArea = ({ id, label, register, errors, placeholder, ...props }) => {
  //const fieldErrors = Object.keys(errors[id] || {});

  return (
    <motion.div className="flex flex-col gap-2" layout>
      <label
        htmlFor={id}
        className="mx-1 text-lg text-gray-700 dark:text-dark-formLabels"
      >
        {label}
      </label>

      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        rows="3"
        className={clsx(
          Object.keys(errors?.[id] || {}).length
            ? "input-invalid"
            : "input-valid",

          "bg-light-bgPrimary dark:bg-dark-bgPrimary dark:border-gray-700"
        )}
        // {...register(id)}
        {...props}
      />
      {/* {fieldErrors && <div className="text-red-400">{errors[id]?.message}</div>} */}
    </motion.div>
  );
};

export default TextArea;
