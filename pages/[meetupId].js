import React from "react";

import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
			title="A First Meetup"
			address="12 Random Street, Strange city 54312"
			description="This is the first meetup"
		/>
	);
}

export default MeetupDetails;
