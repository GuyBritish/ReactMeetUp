import { MongoClient } from "mongodb";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://Khai:Ireallylikedatabase123@cluster0.fsils.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
		);

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);

		client.close();

		res.status(201).json({ message: "Meetup inserted!" });
	}
};

export default handler;
