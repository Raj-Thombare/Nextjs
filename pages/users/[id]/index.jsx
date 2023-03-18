import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserPage() {
  const router = useRouter();
  const param = router.query.id;

  const { data, error } = useSWR(
    `https://dummyjson.com/users/${param}`,
    fetcher
  );

  //   const [user, setUser] = useState({});

  //   useEffect(() => {
  //     (async function () {
  //       const response = await fetch(`https://dummyjson.com/users/${param}`);
  //       const data = await response.json();
  //       setUser(data);
  //     })();
  //   }, [param]);

  return (
    <div>
      <h1>{data?.firstName}</h1>
      <h1>{data?.email}</h1>
      {/* <h1>{user?.firstName}</h1>
      <h1>{user?.email}</h1> */}
    </div>
  );
}
