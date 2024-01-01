export default function Logo() {
  return (
    <div className="flex items-center py-2">
      <img
        className="h-14 w-16"
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt=""
      />
      <span className="text-2xl">Empowering Children</span>
    </div>
  );
}
