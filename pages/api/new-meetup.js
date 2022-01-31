import { MongoClient } from "mongodb";

const meetUpHandler = async (req, res) => { // Poorly named
	if (req.method === "POST") {
		const data = req.body; // Data need to be specify to pass into later functions

		const client = await MongoClient.connect(process.env.DATABASE_URL); // Should not show the db url

		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);

		client.close();

		res.status(201).json({ message: "Meetup inserted!" });
	}
};

export default meetUpHandler;
