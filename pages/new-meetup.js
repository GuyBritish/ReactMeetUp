import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const axios = require("axios");

function NewMeetupPage() {
	const router = useRouter();

	const addMeetupHandler = async (meetupData) => {
		const options = {
			url: "/api/new-meetup",
			method: "POST",
			data: meetupData,
		};
		const resp = await axios(options);

		router.push("/");
	};

	return (
		<React.Fragment>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Add your own meetups and create amazing networking opportunities"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</React.Fragment>
	);
}

export default NewMeetupPage;
