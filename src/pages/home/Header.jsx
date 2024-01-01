export default function Header() {
  return (
    <header
      className="h-[65vh] bg-green-300 flex items-center px-[8%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
          process.env.PUBLIC_URL + "/images/bg.png"
        })`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-[65%] text-white">
        <h1 className="text-6xl">Empowering Futures</h1>
        <h2 className="text-4xl">Sponsor Street Children's Education</h2>
      </div>
    </header>
  );
}
