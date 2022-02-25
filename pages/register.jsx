import CardSignUp from "../src/components/organisms/CardSignUp";
import Gap from "../src/components/atoms/Gap";
import { useRouter } from "next/router";
import { checkIsLogin } from "../src/utils/auth-helper";

export default function Home() {
  return (
    <>
      <Gap height={160} />
      <CardSignUp />
      <Gap height={80} />
    </>
  );
}
