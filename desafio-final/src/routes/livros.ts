import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../prisma/client';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { titulo, autor, anoPublicacao } = req.body;

    const anoAtual = new Date().getFullYear();
    if (!titulo || !autor || !anoPublicacao) {
      return res.status(400).json({ error: 'Campos obrigatórios: titulo, autor, anoPublicacao' });
    }
    if (anoPublicacao > anoAtual) {
      return res.status(400).json({ error: 'Ano de publicação não pode ser futuro.' });
    }

    const livro = await prisma.livro.create({
      data: {
        titulo,
        autor,
        anoPublicacao,
        disponivel: true
      }
    });

    res.status(201).json(livro);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { autor, disponivel } = req.query;

    const filtro: any = {};

    if (autor && typeof autor === 'string') filtro.autor = autor;
    if (disponivel !== undefined) filtro.disponivel = disponivel === 'true';

    const livros = await prisma.livro.findMany({
      where: filtro,
    });

    res.json(livros);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/emprestar', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const livro = await prisma.livro.findUnique({ where: { id } });
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado.' });
    }
    if (!livro.disponivel) {
      return res.status(400).json({ error: 'Livro já está indisponível para empréstimo.' });
    }

    const livroAtualizado = await prisma.livro.update({
      where: { id },
      data: { disponivel: false }
    });

    res.json(livroAtualizado);
  } catch (error) {
    next(error);
  }
});

export default router;
