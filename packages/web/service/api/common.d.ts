declare module "shortUrl" {
  interface ShortUrlDTO {
    _id: string;
    destination: string;
    shortId: string;
    __v: number;
  }

  interface ShortUrlAnalyticsDTO {
    _id: string;
    shortUrl: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
}
