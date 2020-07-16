import app from "./app";

// database
import "./database";

app.listen(app.get("port"));
console.log("Servidor corriendo en el puerto: ", app.get("port"));
