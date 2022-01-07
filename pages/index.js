import MeetupList from "../components/meetups/MeetupList";

const SAMPLE_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: "https://unsplash.com/photos/8IKf54pc3qk",
		address: "12 Random Street, Strange city 54312",
		description: "This is the first meetup",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://unsplash.com/photos/Ciqxn7FE4vE",
		address: "65 Another Street, New city 42531",
		description: "This is the second meetup",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

// export const getServerSideProps = async (context) => {
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: SAMPLE_MEETUPS,
// 		},
// 	};
// };

export const getStaticProps = async () => {
	return {
		props: {
			meetups: SAMPLE_MEETUPS,
		},
		revalidate: 10,
	};
};

export default HomePage;
