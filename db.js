import { Low, JSONFile } from 'lowdb';
const adapter = new JSONFile("db.json");
const db = new Low(adapter);
// Read data from JSON file, this will set db.data content
await db.read();

db.data ||= { users: [], transfers: [] }


// save data to file
await db.write();

export default db;