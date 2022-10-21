import express from 'express';
import _ from 'lodash';
import db from './db.js';

import userRoutes from './routes/users.route.js';

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
	res.render('index');
});

app.use('/users', userRoutes);

app.listen(port, function () {
	console.log('Server listening on port ' + port);
});