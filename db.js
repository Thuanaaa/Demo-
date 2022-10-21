import { Low, JSONFile } from 'lowdb';
const adapter = new JSONFile("db.json");
const db = new Low(adapter);
// Read data from JSON file, this will set db.data content
await db.read();

//db.defaults({ users: [] }).write();
db.data ||= { users: [] }

// save data to file
await db.write();

module.exports = db;