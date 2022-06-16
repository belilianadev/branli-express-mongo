import { Request } from "express";
import { DocumentType } from "@typegoose/typegoose";
import { ResponseCrear } from "../Interfaces/Response";
import UsuarioModel, { Usuario } from "../models/Usuario";

/* export const createUserLogic = async (req: Request): Promise<ResponseCrear> => {
  const u = new UsuarioModel();
  const { usuario, contrasenia } = req.body;

  u.usuario = usuario;
  u.contrasenia = contrasenia;

  const respuesta = await createUserDB(u);
  return respuesta;
}; */

export const createUserLogic = async (req: Request): Promise<ResponseCrear> => {
  const u = new UsuarioModel();
  const { usuario, contrasenia } = req.body;

  u.usuario = usuario;
  u.contrasenia = contrasenia;

  let respuesta: ResponseCrear;

  try {
    const udb = await createUserDB(u);
    respuesta = {
      estado: 200,
      mensaje: "usuario creado",
      descripcion: "se ha insertado en la base de datos",
      objeto: udb,
    };
    console.log("resp3 " + JSON.stringify(respuesta));
    console.log("db " + udb);
  } catch (err) {
    respuesta = {
      estado: 500,
      mensaje: "usuario no creado",
      descripcion: err,
      objeto: null,
    };
    console.log("resp4 " + JSON.stringify(respuesta));
  }
  console.log("resp5 " + JSON.stringify(respuesta));
  return respuesta;
};

export const createUserDB = async (
  u: DocumentType<Usuario>
): Promise<Usuario> => {
  const udb = await u.save();
  return udb;
};

/* export const createUserDB = async (
  u: DocumentType<Usuario>
): Promise<ResponseCrear> => {
  let respuesta: ResponseCrear;

  try {
    const udb = await u.save();
    respuesta = {
      estado: 200,
      mensaje: "usuario creado",
      descripcion: "se ha insertado en la base de datos",
      objeto: udb,
    };
    console.log("resp3 " + JSON.stringify(respuesta));
    console.log("db " + udb);
  } catch (err) {
    respuesta = {
      estado: 500,
      mensaje: "usuario no creado",
      descripcion: err,
      objeto: null,
    };
    console.log("resp4 " + JSON.stringify(respuesta));
  }
  console.log("resp5 " + JSON.stringify(respuesta));
  return respuesta;
}; */
