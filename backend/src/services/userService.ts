import { User } from "../models/userModels";
import { db } from "../database/dbConnection";

export const getAllUsers = async (): Promise<User[]> => {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
};

export const createUser = async (user: User): Promise<User> => {
  const result = await db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [user.name, user.email, user.password]
  );
  return result.rows[0];
};
