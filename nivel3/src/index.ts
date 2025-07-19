import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

app.get("/status", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

function validarTarefa(req: Request, res: Response, next: NextFunction) {
  const { titulo } = req.body;

  if (!titulo || typeof titulo !== "string" || titulo.trim() === "") {
    return res.status(400).json({ erro: "Título é obrigatório e deve ser uma string não vazia." });
  }

  next();
}

app.post("/tarefas", validarTarefa, (req: Request, res: Response) => {
  const { titulo } = req.body;
  res.status(201).json({ mensagem: "Tarefa criada com sucesso", titulo });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
