import express from "express";
import {
  validationsCreate,
  rejectOrCreate,
  listUser,
} from "../Controllers/UsuarioController";
const router = express.Router();

// Assign routes
router.post("/usuarios", validationsCreate, rejectOrCreate);
router.get("/usuarios", listUser);

export default router;
