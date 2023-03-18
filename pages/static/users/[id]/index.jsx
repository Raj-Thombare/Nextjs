export default function UserDetailPage(props) {
  return (
    <div>
      <h1>{props.data.firstName}</h1>
      <h1>{props.data.email}</h1>
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();

  const userIds = data.users.map((user) => user.id);
  return {
    paths: userIds.map((userId) => ({
      params: {
        id: `${userId}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();

  return {
    props: {
      data,
    },
  };
};
