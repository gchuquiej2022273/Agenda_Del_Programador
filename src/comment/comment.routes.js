import { Router } from "express";
import { check } from "express-validator";
import { newComment } from "./comment.controller.js";
import { validarCampo } from "../middlewares/validarCampos.js";
import { isNamevalid } from "../helpers/db-validators.js";

const router = Router();

router.post(
    "/",
    [
        check("name", "the name is mandatory").not().isEmpty(),
        check("description", "the description is mandatory").not().isEmpty(),
        check("name").custom(isNamevalid),
        validarCampo
    ], newComment
);

export default router;