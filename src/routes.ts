import { createShortUrl } from "./controller/shorturl.controller";
import type { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("app");
  });

  app.post("/api/url", createShortUrl);
}

export default routes;
