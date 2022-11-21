import express from 'express';
import cors from 'cors';
import DB from './utils/db_connection';
import appRoutes from "./routes/routes";
import { authController } from './controller';
import helpers from "./utils/helpers";

import swaggerUi from "swagger-ui-express";
import authService from './services/auth.service';
import variables from './variables/variables';

import dotEnv from "dotenv";
dotEnv.config();

const port = process.env.port as string;
const host = process.env.host as string;

const app = express();
app.set("view engine", "ejs");
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve static files
// app.use("/super-panel", express.static(helpers.buildPath("public", "super-admin")));
// app.use("/panel", express.static(helpers.buildPath("public", "admin")));
app.use("/", express.static(helpers.buildPath("public", "frontend")));

// tsoa configuration
app.use("/api-docs-gdsc", swaggerUi.serve, async (_req: any, res: any) => {
    return res.send(swaggerUi.generateHTML(await import("./swagger/swagger.json")));
});

app.use(appRoutes);


DB.then((rs) => {
    console.log("DB is connected.");
    app.listen( 3000, "127.0.0.1", async () => {
        console.log(`server started on port ${port} running on link: http://127.0.0.1:3000/ `);
    });
}).catch((err) => console.log(err));