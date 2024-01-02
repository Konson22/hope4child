export function Button({ text, cName = "bg-rose-600 text-white" }) {
  return <button className={`px-5 py-2 rounded ${cName}`}>{text}</button>;
}

export function ButtonRounded({
  text,
  icon = null,
  cName = "border-rose-600 text-rose-600",
}) {
  return (
    <button
      className={`flex items-center border md:px-6 px-4 md:py-3 py-2 rounded-full ${cName}`}
    >
      {text}
      {icon && <span className="md:text-xl text-sm ml-3">{icon}</span>}
    </button>
  );
}

export function RoundedLinkButton({
  text,
  icon = null,
  cName = "border-rose-600 text-rose-600",
}) {
  return (
    <button
      className={`flex items-center border md:px-6 px-4 md:py-3 py-2 rounded-full ${cName}`}
    >
      {text}
      {icon && <span className="md:text-xl ml-3">{icon}</span>}
    </button>
  );
}
