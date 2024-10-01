export const InputText = ({ label, type, placeholder, name, value, onChange, error }) => {
  return (
    <div className="mb-4 lg:mb-2">
      <label className="text-[19px] text-blue-200">{label}</label>
      <input
        className="w-full text-gray-300 max-w-[327px] h-12 placeholder:text-gray-100 px-3 focus:border-blue-200 shadow-lg"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-error-100 text-[12px] mt-2">{error}</p>}
    </div>
  );
};

