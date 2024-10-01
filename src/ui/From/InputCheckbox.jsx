export const InputCheckbox = ({ label, name, checked, onChange, error }) => {
  return (
    <>
    <div className='flex items-center gap-x-3 mt-2'>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className='checked:hue-rotate-76 w-4 h-4'
      />
      <label htmlFor={name} className='text-blue-200 text-sm'>{label}</label>
    </div>
    {error && <p className="text-error-100 text-[12px]">{error}</p>}
    </>
  );
};

