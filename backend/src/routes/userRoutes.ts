import express from "express";
import { getUsers, addUser } from "../controllers/userControllers";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", addUser);

export default router;
