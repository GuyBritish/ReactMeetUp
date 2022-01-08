import { MongoClient } from "mongodb";

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
	const client = await MongoClient.connect(
		"mongodb+srv://Khai:9xx9RDukUkckgKLD@cluster0.fsils.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	return {
		props: {
			meetups: meetups.map((meetup) => {
				return {
					title: meetup.title,
					address: meetup.address,
					image: meetup.image,
					description: meetup.description,
					id: meetup._id.toString(),
				};
			}),
		},
		revalidate: 1,
	};
};

export default HomePage;
