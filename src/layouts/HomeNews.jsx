import CardNews from "../components/organisms/CardNews";

export default function HomeNews({ children }) {
  const newsElement = children.map((news, index) => (
    <CardNews key={index}>{news}</CardNews>
  ));

  return (
    <div
      className="text-slate-100 grid gap-6 px-8 max-w-5xl mx-auto"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
    >
      {newsElement}
    </div>
  );
}
