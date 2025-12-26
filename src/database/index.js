import { Sequelize } from "sequelize";
import config from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";

const connection = new Sequelize(config);
const models = [Aluno, User];

models.forEach((model) => model.init(connection));
