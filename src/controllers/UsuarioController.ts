import { Request, Response } from "express";
import { ResponseCrear } from "../Interfaces/Response";
import { body, validationResult } from "express-validator";
import { createUserLogic } from "../Services/UsuarioService";

/* export const createUser = async (req: Request): Promise<ResponseCrear> => {
  const u = new UsuarioModel();
  const { usuario, contrasenia } = req.body;

  u.usuario = usuario;
  u.contrasenia = contrasenia;

  const respuesta = await createUserLogic(u);
  return respuesta;
}; */

export const rejectOrCreate = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  let respuesta: ResponseCrear;

  if (!errors.isEmpty()) {
    respuesta = {
      estado: 400,
      mensaje: "Datos inválidos",
      descripcion: errors.array(),
      objeto: null,
    };
  } else {
    respuesta = await createUserLogic(req);
    console.log("resp6 " + JSON.stringify(respuesta));
  }
  return res.status(respuesta.estado).send(respuesta);
};

export const validationsCreate = [
  body("usuario", "usuario inválido").trim().isLength({ min: 5 }),
  body("contrasenia")
    .optional({ checkFalsy: true, nullable: false })
    .isLength({ min: 5 })
    .withMessage("mínimo 5 caracteres")
    .notEmpty()
    .withMessage("No debe estár vacío"),
];
