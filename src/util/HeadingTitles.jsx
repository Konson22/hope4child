export function Heading1({ text, cName = "" }) {
  return <h2 className={`text-4xl font-semibold mb-2 ${cName}`}>{text}</h2>;
}
export function Heading2({ text }) {
  return <h3 className="text-4xl">{text}</h3>;
}
export function Heading3({ text }) {
  return <h3 className="text-xl font-semibold mb-1">{text}</h3>;
}
