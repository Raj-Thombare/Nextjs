import { useState, useEffect } from "react";
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/00/1a/52.jpg",
    title: "Burj Khalifa",
    address: "Dubai, UAE",
  },
  {
    id: "m2",
    image:
      "https://images.thrillophilia.com/image/upload/s--SPjOBfKS--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/040/923/original/Gateway_of_India.jpg.jpg?1453314283",
    title: "Gate Way Of India",
    address: "Mumbai, Maharashtra",
  },
  {
    id: "m3",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/03/1024px-Manali_himachal.jpg",
    title: "Manali, Kullu Valley",
    address: "Manali, Himachal Pradesh",
  },
];

export default function Home({ DUMMY_MEETUPS }) {
  // useEffect(() => {
  //   setMeetupData(DUMMY_MEETUPS);

  // on the first render, Home function component will run and meetupData will be empty.
  // on the second render, useEffect will run and meetupData will populate with data.
  // to solve this issue, use getStaticProps() which fetches data on build time and lets you pass fetched data as props to page
  // }, []);

  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

// getStaticProps() run at build time that means when you run 'next build'!
export async function getStaticProps() {
  return {
    props: {
      DUMMY_MEETUPS,
    },
    revalidate: 5,
    // if the data updates after some time then you need to use revalidate so on every new request, the page will be re-build or regenerated with updated data.
  };
}

