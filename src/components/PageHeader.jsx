import { ButtonRounded } from "../util/Buttons";

export default function PageHeader({ title, text, image }) {
  return (
    <header
      className="h-[50vh] px-[10%] text-white flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "fill",
      }}
    >
      <div className="w-[50%]">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h2 className="text-2xl font-bold">{text}</h2>
        <ButtonRounded text="DONATE NOW" cName="mt-6 bg-rose-600 text-white" />
      </div>
    </header>
  );
}
