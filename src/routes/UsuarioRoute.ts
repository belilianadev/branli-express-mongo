import express from "express";
import {
  validationsCreate,
  rejectOrCreate,
} from "../controllers/UsuarioController";
const router = express.Router();

// Assign routes
router.post("/usuarios", validationsCreate, rejectOrCreate);

export default router;
