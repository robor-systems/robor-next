const TextArea = ({ id, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-gray-700 mx-1 text-lg">
        {label}
      </label>

      <textarea name={id} id={id} placeholder={placeholder} rows="3" />
    </div>
  );
};

export default TextArea;
