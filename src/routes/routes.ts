import { Router } from "express";
import authRoutes from './auth/routes';
import user from './user/user'
import adminRoutes from './admin/admin'
import { errorController } from "../controller";
import { helper } from "../utils";

const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/user', user);
router.use('/api/v1/admin', adminRoutes);
//router.use('/api/v1/super-admin', superAdminRoutes);
router.use("/api/*", errorController.handle404);


// router.use("/panel", (req, res) => {
//     res.status(200).sendFile(helper.buildPath("public", "admin", "index.html"));
// });


// router.use("/", (req, res) => {
//     res.status(200).sendFile(helper.buildPath("public", "frontend", "index.html"));
// });

router.use(errorController.errorHandler);


export default router;
