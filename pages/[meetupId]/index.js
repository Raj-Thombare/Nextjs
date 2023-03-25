import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetails(props) {

  console.log(props.id)
  return (
    <MeetupDetail
      image="https://images.thrillophilia.com/image/upload/s--SPjOBfKS--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/040/923/original/Gateway_of_India.jpg.jpg?1453314283"
      title="Gate Way Of India"
      address="Mumbai, Maharashtra"
      description="This is a first meetup"
    />
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetupId: "m1"
        }
      },
      {
        params: {
          meetupId: "m2"
        }
      }
    ],
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;
  return {
    props: {
      image: "https://images.thrillophilia.com/image/upload/s--SPjOBfKS--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/040/923/original/Gateway_of_India.jpg.jpg?1453314283",
      id: meetupId,
      title: "Gate Way Of India",
      address: "Mumbai, Maharashtra",
      description: "This is a first meetup",
    }
  }
}
