import MeetupList from "../components/meetups/MeetupList";

const SAMPLE_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
		address: "12 Random Street, Strange city 54312",
		description: "This is the first meetup",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
