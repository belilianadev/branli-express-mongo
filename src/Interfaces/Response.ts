import { CallbackError } from "mongoose";
import { Usuario } from "../Models/Usuario";

interface Response {
  estado: number;
  mensaje: string;
  descripcion: string | CallbackError | unknown;
}

export interface ResponseUser extends Response {
  objeto: Usuario | null;
}

export interface ResponseUsers extends Response {
  objeto: Usuario[] | null;
}
