import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({
      errors: ["Falha na autenticação do usuário"],
    });
  }

  const [, token] = authorization.split(" ");
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        errors: ["Usuário inválido"],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    console.error(e);
    return res.status(400).json({
      errors: ["Token expirado/inválido"],
    });
  }
};
