import type { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";

export async function createShortUrl(req: Request, res: Response) {
  // Get the destination from the request body
  const { destination } = req.body;
  // Create a shortUrl
  const shortURL = await shortUrl.create({ destination });
  // Return the shortUrl
  res.send(shortURL);
}

export async function handleRedict(req: Request, res: Response) {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  analytics.create({ shortUrl: short._id });

  res.redirect(short.destination);
}

export async function getAnalytics(req: Request, res: Response) {
  const data = await analytics.find({}).lean();

  return res.send(data);
}

export async function handleAll(req: Request, res: Response) {
  const data = await shortUrl.find({}).lean();

  return res.send(data);
}
