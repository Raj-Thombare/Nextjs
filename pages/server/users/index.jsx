import Link from "next/link";

export default function UsersPageSSR(props) {
  return (
    <div>
      <h1>Users (SSR)</h1>
      {props.data.users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/server/users/${user.id}`}>{user.firstName}</Link>
          </div>
        );
      })}
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};
