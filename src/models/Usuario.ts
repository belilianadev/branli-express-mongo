import { prop, getModelForClass } from "@typegoose/typegoose";

export class Usuario {
  @prop({
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 15,
    unique: true,
    lowercase: true,
  })
  usuario!: string;

  @prop({ type: String, required: true, minlength: 5, maxlength: 20 })
  contrasenia!: string;
}

const UsuarioModel = getModelForClass(Usuario);
export default UsuarioModel;
