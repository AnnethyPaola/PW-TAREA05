import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://Annethy25:annethy25@cluster0.pe4p1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'dbtarea5';
(async () => {
	try {
		await client.connect();
		console.log('Connected successfully to server');
		const db = client.db(dbName);
		const collection = db.collection('conct');

		// the following code examples can be pasted here...

		return 'done.';
	} catch (error) {
		console.error(error);
	}
})();
async function insertData(body) {
	try {
		await client.connect();
		console.log('Connected successfully to server');
		const db = client.db(dbName);
		const collection = db.collection('conct');
		await collection.insertMany(body);
	} catch (error) {
		if (error) {
			console.log(error); // special case for some reason
		}



	}
}
export default insertData;
