
export function HeadingTitle({ text, cName='text-center text-gray-500' }) {
  return (
    <h2 className={`text-4xl font-semibold ${cName}`}>{text}</h2>
  )
}

export function HeadingTitle2({ text, cName='text-white' }) {
  return (
    <h3 className={`text-2xl font-semibold ${cName}`}>{text}</h3>
  )
}
