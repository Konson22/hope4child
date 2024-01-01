export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="bg-white rounded-full overflow-hidden p-1 mr-3">
        <img
          className="md:h-[3rem] md:w-[3rem] h-8 w-8"
          src={process.env.PUBLIC_URL + "/images/logo2.png"}
          alt=""
        />
      </div>
      <span className="md:text-2xl flex items-center">
        Wings<span className="text-amber-500 text-4xl">4</span>Change
      </span>
    </div>
  );
}
