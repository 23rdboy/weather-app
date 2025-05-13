import Card from "./components/Card";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <select className="px-4 py-2 rounded-md shadow-md font-medium">
        <option value="London" selected>London</option>
        <option value="" selected>?</option>
        <option value="" selected>?</option>
        <option value="" selected>?</option>
      </select>
      <div className="p-4">
      <Card 
      date={"Today"}
      condition={"☼"}
      minTemp={"10º"}
      maxTemp={"22º"}
      wind={"8mph"}
      />
      <Card 
      date={"Tue 14 May"}
      condition={"☼"}
      minTemp={"8º"}
      maxTemp={"22º"}
      wind={"6-13mph"}
      />

    </div>
    </div>
  );
}