import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "nome1",
      sobrenome: "sobrenome1",
      email: "email1@email1.com",
      idade: 30,
      peso: 80,
      altura: 1.8,
    });

    return res.json(novoAluno);
  }
}

export default new HomeController();
