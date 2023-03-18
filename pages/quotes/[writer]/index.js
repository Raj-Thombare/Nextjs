import Link from "next/link";
import { useRouter } from "next/router";

export default function NewsPage() {
  const router = useRouter();

  // Router Methods
  // push
  // replace
  // reload

  return (
    <div>
      <h1>Writer Page</h1>
      <br />
      <h2>{router.query.writer}</h2>
      <br />
      <br />
      <button onClick={(e) => router.reload()}>refresh</button>
      <br />
      <br />
      <Link href="/">Go To Home</Link>
    </div>
  );
}
