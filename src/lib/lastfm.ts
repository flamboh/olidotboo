export const periods = {
  "30": "1month",
  "90": "3month",
  "180": "6month",
} as const;

export type Period = keyof typeof periods;

export interface Artist {
  name: string;
  playcount: number;
  url: string;
}

interface LastfmResponse {
  topartists?: {
    artist?: Array<{
      name?: string;
      playcount?: string;
      url?: string;
    }>;
  };
  error?: number;
  message?: string;
}

export function isPeriod(value: string): value is Period {
  return value in periods;
}

export async function getTopArtists(period: Period, apiKey: string) {
  const params = new URLSearchParams({
    method: "user.gettopartists",
    user: "flamboh",
    period: periods[period],
    limit: "4",
    format: "json",
    api_key: apiKey,
  });
  const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`, {
    headers: { "User-Agent": "olidotboo/1.0 (https://oli.boo)" },
  });
  const data = (await response.json()) as LastfmResponse;

  if (!response.ok || data.error || !Array.isArray(data.topartists?.artist)) {
    throw new Error(data.message ?? "Last.fm request failed");
  }

  return data.topartists.artist.slice(0, 4).flatMap((artist) => {
    const playcount = Number(artist.playcount);
    if (!artist.name || !artist.url || !Number.isFinite(playcount)) return [];
    return [{ name: artist.name, playcount, url: artist.url } satisfies Artist];
  });
}
