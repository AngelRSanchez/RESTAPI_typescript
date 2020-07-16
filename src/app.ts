import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

// Authtentication
import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.get("/", (req, res) => {
	res.send(`La API esta corriendo en http://localhost:${app.get("port")}`);
});

app.use(authRoutes);
app.use(specialRoutes);

export default app;
