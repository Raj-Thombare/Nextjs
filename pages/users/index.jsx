import Link from "next/link";
import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function UsersPage() {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  // useSWR - Stale (first get cached data) While Revalidate ( then fetch new data)

  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     (async function () {
  //       const response = await fetch("https://dummyjson.com/users");
  //       const data = await response.json();
  //       setUsers(data.users);
  //     })();
  //   }, []);

  if (error) {
    return <h2>Error Occured!</h2>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Users (Client)</h1>

      {data &&
        data.users?.map((user) => {
          return (
            <div key={user.id}>
              <Link href={`/users/${user.id}`}>{user.firstName}</Link>
            </div>
          );
        })}
    </div>
  );
}
