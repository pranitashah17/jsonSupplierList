import { MongoClient } from "mongodb";

export async function connectionNew () {
const uri = "mongodb+srv://pranitashah17:PranitaShah17@cluster0.yipyyvq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

await client.connect();
return client;
}
