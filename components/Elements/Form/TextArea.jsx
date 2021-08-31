import clsx from "clsx";
import { motion } from "framer-motion";

const TextArea = ({ id, label, register, errors, placeholder }) => {
  const fieldErrors = Object.keys(errors[id] || {});

  return (
    <motion.div className="flex flex-col gap-2" layout>
      <label htmlFor={id} className="text-gray-700 mx-1 text-lg">
        {label}
      </label>

      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        rows="3"
        className={clsx(
          Object.keys(errors[id] || {}).length ? "input-invalid" : "input-valid"
        )}
        {...register(id)}
      />
      {fieldErrors && <div className="text-red-400">{errors[id]?.message}</div>}
    </motion.div>
  );
};

export default TextArea;
