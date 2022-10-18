import express from "express";
const app = express();

import { Low, JSONFile  } from 'lowdb';

const adapter = new JSONFile("db.json")
const db = new Low(adapter)


// Read data from JSON file, this will set db.data content
await db.read()

// db.defaults({ users: [] }).write();

db.data ||= { users: [] } 

// save data to file
await db.write();


const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
	res.render('index');
});

app.get('/users', function (req, res) {
	res.render('users/index', {
		users: users
	});
});

app.get('/users/search', function (req, res) {
	var q = req.query.q;
	var matchedUsers = users.filter(function (user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUsers
	});
});

app.get('/users/create', function (req, res) {
	res.render('users/create');
});

app.post('/users/create', function (req, res) {
	users.push(req.body);
	res.redirect('/users');
})

app.listen(port, function () {
	console.log('Server listening on port ' + port);
});