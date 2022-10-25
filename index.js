import express from 'express';
import userRoutes from './routes/users.route.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js'
import requireAuth from './middleware/auth.middleware.js';
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', function (req, res) {
	res.render('index');
});

app.use('/users', requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen(port, function () {
	console.log('Server listening on port ' + port);
});