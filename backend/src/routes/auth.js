import express from "express";
import { login, logout, seeOrderedProducts, seeProductList, signup } from "../controllers/authcontrollers.js";
import { protectRoutes } from "../lib/protectedroute.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", protectRoutes, signup);
router.post("/logout", protectRoutes, logout);
router.get("/products", protectRoutes, seeProductList);
router.get("/orderedProducts", protectRoutes, seeOrderedProducts);


export default router;