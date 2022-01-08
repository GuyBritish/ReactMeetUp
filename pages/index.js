import React from "react";
import Head from "next/head";

import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
	return (
		<React.Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="Browse a large list of active meetups" />
			</Head>
			<MeetupList meetups={props.meetups} />;
		</React.Fragment>
	);
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
