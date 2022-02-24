import CardSignUp from "../src/components/organisms/CardSignUp";
import Gap from "../src/components/atoms/Gap";

export default function Home() {
  return (
    <>
      <Gap height={160} />
      <CardSignUp />
      <Gap height={80} />
    </>
  );
}