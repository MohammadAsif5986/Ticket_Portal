import {Router} from "express";
import testRoute from "./testRoute";

const router = Router();

router.get('/test', testRoute);

export default router;