import { ShortUrlDTO, ShortUrlAnalyticsDTO } from "shortUrl";

const baseUrl = "http://localhost:3001";

export function addShortUrl(parma): Promise<ShortUrlDTO> {
  return fetch(`${baseUrl}/api/url`, {
    body: JSON.stringify(parma),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(res => res);
}

export function getByShortId(id: string): Promise<ShortUrlDTO[]> {
  return fetch(`${baseUrl}/${id}`)
    .then(res => res.json())
    .then(res => res);
}

export function getShortUrlAll(): Promise<ShortUrlDTO[]> {
  return fetch(`${baseUrl}/api/all`)
    .then(res => res.json())
    .then(res => res);
}

export function getShortUrlAnalytics(): Promise<ShortUrlAnalyticsDTO[]> {
  return fetch(`${baseUrl}/api/analytics`)
    .then(res => res.json())
    .then(res => res);
}
