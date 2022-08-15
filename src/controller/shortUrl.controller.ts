import type { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
  // Get the destination from the request body
  const { destination } = req.body;
  // Create a shortUrl
  const shortURL = await shortUrl.create({ destination });
  // Return the shortUrl
}
