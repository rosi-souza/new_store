import express from 'express'
import bodyParser from 'body-parser'
import authorRoutes from './server/routes/AuthorRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5500;

app.use('/api/authors', authorRoutes);

// quando recebe uma rota não listada
app.get('*', (req, res) => res.status(200).send({
  message: 'Boas-vindas à API!',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app
