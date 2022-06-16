import express from "express";
import connect from "./dataBase/connect";
import usuarioRoute from "./routes/UsuarioRoute";

const app = express();
app.use(express.json());

// Loading routes
app.use("/branli/" + process.env.VERSION + "/", usuarioRoute);

connect();

export default app;
