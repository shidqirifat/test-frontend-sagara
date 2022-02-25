import { useRouter } from "next/router";
import Gap from "../../src/components/atoms/Gap";
import NewsDetail from "../../src/components/moleculs/NewsDetail";
import { checkIsLogin } from "../../src/utils/auth-helper";

export default function Home({ query }) {
  const router = useRouter();
  if (!checkIsLogin()) router.push("/login");

  return (
    <div className="min-h-screen max-w-2xl px-4 mx-auto">
      <Gap height={120} />
      <NewsDetail>{query}</NewsDetail>
      <Gap height={80} />
    </div>
  );
}

Home.getInitialProps = async ({ query }) => ({ query });
