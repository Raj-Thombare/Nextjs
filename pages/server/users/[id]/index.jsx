export default function UserDetailPage(props) {
  return (
    <div>
      <h1>{props.data.firstName}</h1>
      <h1>{props.data.email}</h1>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const data = await (
    await fetch(`https://dummyjson.com/users/${params.id}`)
  ).json();

  return {
    props: {
      data,
    },
  };
};
