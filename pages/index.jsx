import { useEffect, useState } from "react";
import Gap from "../src/components/atoms/Gap";
import { getUserLogin } from "../src/utils/auth-helper";
import CONFIG from "../src/utils/CONFIG";
import Hero from "../src/components/moleculs/Hero";
import HomeNews from "../src/layouts/HomeNews";
import { checkIsLogin } from "../src/utils/auth-helper";
import { useRouter } from "next/router";

export default function Home({ data }) {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!checkIsLogin()) router.back();

    setUser(getUserLogin() || null);
  }, []);

  return (
    <div>
      <Gap height={200} />
      <Hero user={user} />
      <HomeNews>{data.articles}</HomeNews>
      <Gap height={100} />
    </div>
  );
}

Home.getInitialProps = async () => {
  const linkAPI = CONFIG.ENDPOINT + CONFIG.API_KEY;
  const res = await fetch(linkAPI);
  const data = await res.json();
  return { data };
};
