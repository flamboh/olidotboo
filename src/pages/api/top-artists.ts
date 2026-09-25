import { LASTFM_API_KEY } from "astro:env/server";
import type { APIRoute } from "astro";
import { getTopArtists, isLimit, isPeriod } from "@/lib/lastfm";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const params = new URL(request.url).searchParams;
  const period = params.get("period") ?? "180";
  const limit = params.get("limit") ?? "4";
  if (!isPeriod(period)) {
    return Response.json(
      { error: "Period must be 30, 90, or 180" },
      { status: 400 },
    );
  }
  if (!isLimit(limit)) {
    return Response.json({ error: "Limit must be 4 or 8" }, { status: 400 });
  }

  const cache = await caches.open("top-artists");
  const cacheKey = new Request(
    new URL(`/api/top-artists?period=${period}&limit=${limit}`, request.url),
  );
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const artists = await getTopArtists(period, limit, LASTFM_API_KEY);
    const response = Response.json(
      { artists, period: Number(period) },
      {
        headers: {
          "Cache-Control":
            "public, max-age=300, s-maxage=21600, stale-while-revalidate=86400",
        },
      },
    );
    await cache.put(cacheKey, response.clone());
    return response;
  } catch (error) {
    console.error("Last.fm request failed", error);
    return Response.json({ error: "Last.fm request failed" }, { status: 502 });
  }
};
