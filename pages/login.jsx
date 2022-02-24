import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { firstName, lastName } = router.query;

  return (
    <div>
      <h1>Hello, {firstName + " " + lastName}, silahkan login kembali</h1>
    </div>
  );
}
