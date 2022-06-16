import { CallbackError } from "mongoose";
import { Usuario } from "../models/Usuario";
import { UsuarioVista } from "./UsuarioVista";

interface Response {
  estado: number;
  mensaje: string;
  descripcion: string | CallbackError | unknown;
}

export interface ResponseCrear extends Response {
  objeto: Usuario | null;
}

export interface ResponseUsuario extends Response {
  objeto: UsuarioVista;
}
