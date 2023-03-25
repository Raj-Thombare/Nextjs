import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = MongoClient.connect("mongodb+srv://Raj:8Wvn9mY5YoT9DhVE@meetups.mrodxzz.mongodb.net/?retryWrites=true&w=majority")

        const db = client.db();

        const meetupsCollections = db.collection("meetups");

        const result = await meetupsCollections.insertOne(data);
        console.log(result)

        client.close();

        res.status(201).json({ message: "Meetup Added!" })
    }
}

// import mongodb from 'mongodb';

// const MongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://Raj:8Wvn9mY5YoT9DhVE@meetups.mrodxzz.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("meetups").collection("meetups");
//     // perform actions on the collection object
//     client.close();
// });