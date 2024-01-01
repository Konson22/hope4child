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
      className={`flex items-center border px-6 py-3 rounded-full ${cName}`}
    >
      {text}
      {icon && <span className="text-xl ml-3">{icon}</span>}
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
      className={`flex items-center border px-6 py-3 rounded-full ${cName}`}
    >
      {text}
      {icon && <span className="text-xl ml-3">{icon}</span>}
    </button>
  );
}
