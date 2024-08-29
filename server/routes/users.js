// server/routes/users.js
import express from "express";
import {
    addRemoveFriend,
    getUser,
    getUserFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/user/:id", verifyToken, getUser);
router.get("/user/friend/:id", verifyToken, getUserFriend);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
