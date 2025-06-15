import express from "express";
import { cancelOrder, login, logout, orderProduct, seeOrderedProducts, seeProductList, signup } from "../controllers/authcontrollers.js";
import { protectRoutes } from "../lib/protectedroute.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", protectRoutes, signup);
router.post("/logout", protectRoutes, logout);
router.get("/products", protectRoutes, seeProductList);
router.get("/orderedProducts", protectRoutes, seeOrderedProducts);
router.post("/addNewOrder", protectRoutes,orderProduct);
router.post("/removeOrder", protectRoutes,cancelOrder);


export default router;