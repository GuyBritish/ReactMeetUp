import { useRouter } from "next/router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	const router = useRouter();

	const addMeetupHandler = async (meetupData) => {
		const options = {
			url: "api/new-meetup",
			method: "POST",
			data: meetupData,
		};
		const resp = await axios(options);

		router.push("/");
	};

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
