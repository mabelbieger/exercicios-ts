import express from 'express';
import livrosRoutes from './routes/livros';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/livros', livrosRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
