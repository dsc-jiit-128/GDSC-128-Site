import { Router } from "express";
import { adminController } from "../../controller";
import { isAuth } from "../middlewares/isAuth";

const router = Router();

router.get("/send-email-to-all", isAuth , adminController.sendEmailToAll);

export default router;