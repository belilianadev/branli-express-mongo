/* import { MaxLength } from "class-validator";

import { prop, getModelForClass } from "@typegoose/typegoose";

export class Usuario {
  @prop({
    type: String,
    required: true,
    trim: true,
    maxlength: 15,
    unique: true,
    lowercase: true,
  })
  @MaxLength(5, {
    message: "regalos",
  })
  usuario!: string;

  @prop({ type: String, required: true, maxlength: 20 })
  @MaxLength(5)
  contrasenia!: string;
}

const Cama = getModelForClass(Usuario);
export default Cama;
 */
