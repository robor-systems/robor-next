import clsx from "clsx";

const TextField = ({
  id,
  label,
  register,
  errors,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="mx-1 text-lg text-gray-700 dark:text-dark-formLabels"
      >
        {label}
      </label>

      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className={clsx(
          Object.keys(errors?.[id] || {}).length
            ? "input-invalid"
            : "input-valid",

          "bg-light-bgPrimary dark:bg-dark-bgPrimary dark:border-gray-700"
        )}
        value={value}
        onChange={onChange}
        //{...register(id)}
        {...props}
      />
      {/* {fieldErrors && <div className="text-red-400">{errors[id]?.message}</div>} */}
    </div>
  );
};

export default TextField;
