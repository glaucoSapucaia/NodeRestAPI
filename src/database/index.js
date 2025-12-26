import { Sequelize } from "sequelize";
import config from "../config/database";
import Aluno from "../models/Aluno";

const connection = new Sequelize(config);
const models = [Aluno];

models.forEach((model) => model.init(connection));
