import clsx from "clsx";

const TextField = ({ id, label, register, errors, placeholder, ...props }) => {
  const fieldErrors = Object.keys(errors[id] || {});

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-gray-700 mx-1 text-lg">
        {label}
      </label>

      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className={clsx(fieldErrors.length ? "input-invalid" : "input-valid")}
        {...register(id)}
        {...props}
      />
      {fieldErrors && <div className="text-red-400">{errors[id]?.message}</div>}
    </div>
  );
};

export default TextField;
