import { Request, Response } from "express";
import { ResponseUser } from "../Interfaces/Response";
import { body, validationResult } from "express-validator";
import { createUserLogic, listUserLogic } from "../Services/UsuarioService";

export const rejectOrCreate = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  let respuesta: ResponseUser;

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

export const listUser = async (req: Request, res: Response) => {
  console.log("hola entre a controller listar");
  const respuesta = await listUserLogic(req);
  return res.status(respuesta.estado).send(respuesta);
};
