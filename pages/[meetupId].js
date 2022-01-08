import React from "react";
import Head from "next/head";

import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
	return (
		<React.Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content={props.meetupData.description} />
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</React.Fragment>
	);
}

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://Khai:9xx9RDukUkckgKLD@cluster0.fsils.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	return {
		fallback: false,
		paths: meetups.map((meetup) => {
			return {
				params: {
					meetupId: meetup._id.toString(),
				},
			};
		}),
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.meetupId;

	const client = await MongoClient.connect(
		"mongodb+srv://Khai:9xx9RDukUkckgKLD@cluster0.fsils.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	);

	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetup = await meetupsCollection.findOne({ _id: ObjectId(id) });

	return {
		props: {
			meetupData: {
				id: meetup._id.toString(),
				image: meetup.image,
				title: meetup.title,
				description: meetup.description,
			},
		},
	};
};

export default MeetupDetails;
