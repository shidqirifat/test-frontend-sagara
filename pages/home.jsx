/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Gap from "../src/components/atoms/Gap";
import { getUserLogin } from "../src/utils/auth-helper";
import { DATA } from "../src/utils/DATA";
import Hero from "../src/components/moleculs/Hero";
import HomeNews from "../src/layouts/HomeNews";

export default function Home({ data }) {
  const [user, setUser] = useState();

  useEffect(() => {
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
  const linkAPI = DATA.ENDPOINT + DATA.API_KEY;
  const res = await fetch(linkAPI);
  const data = await res.json();
  return { data };
};
