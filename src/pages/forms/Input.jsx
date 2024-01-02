export function Input({ name, label, type = "text", placeholder }) {
  return (
    <div className={`mb-5`}>
      {label && (
        <label className="block mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={`h-14 w-full px-3 rounded-md border-none focus:border-none focus:outline-none`}
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
}

export function TextAreaInput({ name, label, placeholder }) {
  return (
    <div className={`mb-5`}>
      {label && (
        <label className="block mb-2" htmlFor={name}>
          {label}
        </label>
      )}

      <textarea
        name={name}
        className={`h-32 w-full p-3 rounded-md border-none focus:border-none focus:outline-none`}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
