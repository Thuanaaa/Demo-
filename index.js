import express from 'express';
import cookieParser from 'cookie-parser';
import requireAuth from './middleware/auth.middleware.js';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/users.route.js';
import prodRoutes from './routes/prod.route.js';
import cartRoute from './routes/cart.route.js';
import sessionMiddleware from './middleware/session.middleware.js';

//env
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
const app = express();
const port = parseInt(process.env.PORT);

//PUG
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//cookie_paser
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.get('/', function (req, res) {
	res.render('index');
});

app.use('/users', requireAuth, userRoutes);
app.use('/auth', authRoutes);
app.use('/prod', prodRoutes);
app.use('/cart', cartRoute);
app.listen(port, function () {
	console.log('Server listening on ' + `http://localhost:${port}`);
});