import Link from "next/link";

export default function UsersPageSSG(props) {
  return (
    <div>
      <h1>Users (SSG)</h1>
      {props.data.users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/static/users/${user.id}`}>{user.firstName}</Link>
          </div>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();

  return {
    props: {
      data,
    },
  };
};
