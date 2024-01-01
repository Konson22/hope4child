export default function Header() {
  const formContent = (cName) => {
    return (
      <div
        className={`md:w-[35%] md:bg-primary/80 bg-primary backdrop-blure-md md:p-9 p-5 ${cName}`}
      >
        <h2 className="text-xl md:mb-5 mb-4 text-white">
          Join Us in Making a Difference
        </h2>
        <form>
          <div className="mb-5">
            <input
              className="h-[3rem] w-full px-3"
              type="text"
              placeholder="Choose State"
            />
          </div>
          <div className="mb-5">
            <input
              className="h-[3rem] w-full px-3"
              type="text"
              placeholder="Choose Gender"
            />
          </div>
          <div className="mb-5">
            <input
              className="h-[3rem] w-full px-3"
              type="text"
              placeholder="Choose Age"
            />
          </div>
          <button className="bg-rose-500 text-white w-full rounded px-5 py-2">
            Match your child
          </button>
        </form>
      </div>
    );
  };

  return (
    <header
      className="circle flex px-[10%] items-center py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
          process.env.PUBLIC_URL + "/images/people-3149087_1280.jpg"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[65%] text-white">
        <h1 className="text-6xl">Empowering Futures</h1>
        <h2 className="text-4xl">Sponsor Street Children's Education</h2>
      </div>
      {formContent("md:block hidden")}
    </header>
  );
}
