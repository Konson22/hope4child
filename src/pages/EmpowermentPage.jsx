import PageHeader from "../components/PageHeader";

export default function EmpowermentPage() {
  return (
    <div>
      <PageHeader
        image={
          process.env.PUBLIC_URL + "/images/pexels-aissa-bouabellou-2406271.jpg"
        }
        text=""
        title="Empower Children to Get Life Better."
      />
    </div>
  );
}
