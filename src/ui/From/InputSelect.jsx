export const InputSelect = ({ label, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="text-[19px] text-blue-200">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className='w-full max-w-[327px] h-12 placeholder:text-gray-100 px-3 focus:border-blue-200 shadow-lg'
      >
        <option value="" disabled>Selecciona una opción</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {error && <p className="text-error-100 text-[12px] mt-2">{error}</p>}
    </div>
  );
};

