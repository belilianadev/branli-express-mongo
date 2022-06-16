import {
  prop,
  modelOptions,
  getModelForClass,
  pre,
} from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {},
})
// eslint-disable-next-line no-use-before-define
@pre<Usuario>("save", function () {
  console.log("fechaAlta: " + this.fechaAlta);
})
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

  @prop({ type: String, requiered: true, trim: true, uppercase: true })
  nombre!: string;

  @prop({ type: String, requiered: true, trim: true, uppercase: true })
  apellidoPaterno!: string;

  @prop({ type: String, trim: true, uppercase: true })
  apellidoMaterno?: string;

  @prop({ type: Number })
  edad?: number;

  @prop({ type: String, uppercase: true, minlength: 18, maxlength: 18 })
  curp?: string;

  @prop({ type: String, required: true, lowercase: true, trim: true })
  email!: string;

  @prop({ type: String, required: true, maxlength: 100, uppercase: true })
  domicilio!: string;
  // { set: (val: string[]) => val.join(' '), get: (val: string) => val.split(' '), type: String }

  @prop({ required: true, type: Date, default: Date.now() })
  fechaAlta!: Date[];

  @prop({ type: Date })
  fechaBaja?: Date[];

  @prop({ type: Boolean, required: true, default: 0 })
  activo!: boolean;
}

const UsuarioModel = getModelForClass(Usuario);
export default UsuarioModel;
