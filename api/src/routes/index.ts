import express from "express";
import imageRoute from "./image.route";

const router = express.Router();

const allRoutes = [
  {
    path: "/images",
    route: imageRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
