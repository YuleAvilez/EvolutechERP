import express from "express";
import clientRoutes from "./routes/client.routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);

app.listen(3000, () => console.log("API corriendo en http://localhost:3000"));
