import { MongoClient } from 'mongodb'


const url = 'mongodb+srv://Annethy25:annethy25@cluster0.pe4p1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbName = 'dbtarea5';
(async () => {
	try {
		await client.connect();
		console.log('Servidor conectado');
		const db = client.db(dbName);
		const collection = db.collection('conct');

		return 'done.';
	} catch (error) {
		console.error(error);
	}
})();
async function insertData(body) {
	try {
		await client.connect();
		console.log('Servidor conectado');
		const db = client.db(dbName);
		const collection = db.collection('conct');
		await collection.insertMany(body);
	} catch (error) {
		if (error) {
			console.log(error); 
		}
	}
}
export default insertData;
