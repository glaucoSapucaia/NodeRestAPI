import jwt from "jsonwebtoken";

export default (req, res, next) => {
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
