import express from 'express';
import cors from 'cors';
import DB from './utils/db_connection';
import appRoutes from "./routes/routes";
import { authController } from './controller';
import helpers from "./utils/helpers";

import swaggerUi from "swagger-ui-express";
import authService from './services/auth.service';
import variables from './variables/variables';

const app = express();
app.set("view engine", "ejs");
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve static files
// app.use("/super-panel", express.static(helpers.buildPath("public", "super-admin")));
// app.use("/panel", express.static(helpers.buildPath("public", "admin")));
// app.use("/", express.static(helpers.buildPath("public", "frontend")));

// // toa configuration
// app.use("/api-docs", swaggerUi.serve, async (_req: any, res: any) => {
//     return res.send(swaggerUi.generateHTML(await import("./swagger/swagger.json")));
// });

app.use(appRoutes);


DB.then((rs) => {
    console.log("DB is connected.");
    app.listen(variables.port,variables.host, async () => {
        console.log(`server started on port ${variables.port} running on link: http://${variables.host}:${variables.port}/ `);
    });
}).catch((err) => console.log(err));