import TextHero from "../atoms/TextHero";

export default function Hero({ user }) {
  return (
    <div className="text-center mb-14">
      <TextHero greetings={true}>
        Hi, {user?.firstName} {user?.lastName}!
      </TextHero>
      <TextHero>Berikut berita yang sedang populer di minggu ini.</TextHero>
    </div>
  );
}
