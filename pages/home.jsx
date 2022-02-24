import { useEffect, useState } from "react";
import Gap from "../src/components/atoms/Gap";
import { getUserLogin } from "../src/utils/auth-helper";
import { DATA } from "../src/utils/DATA";

export default function Home() {
  const [user, setUser] = useState({});
  const [news, setNews] = useState([]);
  const userLogin = getUserLogin();

  useEffect(() => {
    setUser(userLogin || null);

    const linkAPI = DATA.ENDPOINT + DATA.API_KEY;
    fetch(linkAPI)
      .then((response) => response.json())
      .then((data) => setNews(data.sources));
  }, []);

  const newsElement = news.map((eachNews) => (
    <div key={eachNews.id}>
      <h2>{eachNews.name}</h2>
      <h6>{eachNews.description}</h6>
    </div>
  ));

  return (
    <div>
      <Gap height={200} />
      <h1>Hello {user?.firstName + " " + user?.lastName} </h1>
      <div>{newsElement}</div>
    </div>
  );
}
