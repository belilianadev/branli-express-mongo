import { Request } from "express";
import { DocumentType } from "@typegoose/typegoose";
import { ResponseUser, ResponseUsers } from "../Interfaces/Response";
import UsuarioModel, { Usuario } from "../Models/Usuario";

export const createUserLogic = async (req: Request): Promise<ResponseUser> => {
  const u = new UsuarioModel();
  const { usuario, contrasenia } = req.body;

  u.usuario = usuario;
  u.contrasenia = contrasenia;

  let respuesta: ResponseUser;

  try {
    const udb = await createUserDB(u);
    respuesta = {
      estado: 201,
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

export const listUserLogic = async (_req: Request): Promise<ResponseUsers> => {
  let respuesta;

  try {
    const uudb = await listUserDB();
    if (uudb.length > 0)
      respuesta = {
        estado: 200,
        mensaje: "usuarios encontrados",
        descripcion: "Lista de usuarios encontrada",
        objeto: uudb,
      };
    else
      respuesta = {
        estado: 404,
        mensaje: "Lista de usuarios vacía",
        descripcion: "No se encuentran usuarios almacenados",
        objeto: null,
      };
  } catch (err) {
    respuesta = {
      estado: 500,
      mensaje: "Usuarios no encontrados",
      descripcion: err,
      objeto: null,
    };
  }

  return respuesta;
};

export const createUserDB = async (
  u: DocumentType<Usuario>
): Promise<Usuario> => {
  const udb = await u.save();
  return udb;
};

export const listUserDB = async (): Promise<Usuario[]> => {
  const udb: Usuario[] = await UsuarioModel.find({});
  return udb;
};
