import express from "express";
import { login, logout, seeProductList, signup } from "../controllers/authcontrollers.js";
import { protectRoutes } from "../lib/protectedroute.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", protectRoutes, signup);
router.post("/logout", protectRoutes, logout);
router.get("/products", protectRoutes, seeProductList)

export default router;