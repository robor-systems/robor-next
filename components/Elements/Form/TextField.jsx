const TextField = ({ id, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-gray-700 mx-1 text-lg">
        {label}
      </label>

      <input type="text" name={id} id={id} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
