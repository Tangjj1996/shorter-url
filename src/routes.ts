import { createShortUrl, handleRedict } from "./controller/shorturl.controller";
import type { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("app");
  });

  app.post("/api/url", createShortUrl);

  app.get("/:shortId", handleRedict);
}

export default routes;
