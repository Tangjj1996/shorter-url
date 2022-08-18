import {
  createShortUrl,
  getAnalytics,
  handleAll,
  handleRedict,
} from "./controller/shorturl.controller";
import validateResource from "./middleware/validateResource";
import createShortUrlSchema from "./schemas/createShortUrl.schema";

import type { Express } from "express";

function routes(app: Express) {
  app.post("/api/url", validateResource(createShortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedict);

  app.get("/api/all", handleAll);

  app.get("/api/analytics", getAnalytics);
}

export default routes;
