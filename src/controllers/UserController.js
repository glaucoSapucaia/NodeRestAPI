import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { ìd, nome, email } = novoUser;
      return res.json({ ìd, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ["Nenhum usuário encontrado pelo ID"],
        });
      }

      const { _id, nome, email } = user;
      return res.json({ _id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async update(req, res) {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
          errors: ["Dados para atualização não informados"],
        });
      }

      const id = req.userId;

      if (!id) {
        return res.status(400).json({
          errors: ["ID não informado"],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["Nenhum usuário encontrado pelo ID"],
        });
      }

      const userNewData = await user.update(req.body);
      const { _id, nome, email } = userNewData;
      return res.json({ _id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ["ID não informado"],
        });
      }

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["Nenhum usuário encontrado pelo ID"],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
