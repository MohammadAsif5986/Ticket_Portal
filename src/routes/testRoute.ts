import { Router } from "express";
import { getTest } from "../controller/testController";

const router = Router();

router.get('/', getTest);

export default router;