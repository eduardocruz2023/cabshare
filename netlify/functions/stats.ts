import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/functions";

type Stats = {
  visits: number;
  downloads: number;
  irDownloads: Record<string, number>;
  updatedAt: string;
};

const defaultStats = (): Stats => ({
  visits: 0,
  downloads: 0,
  irDownloads: {},
  updatedAt: new Date().toISOString(),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

async function readStats() {
  const store = getStore({ name: "cabshare-stats", consistency: "strong" });
  const stats = (await store.get("totals", { type: "json" })) as Stats | null;
  return { store, stats: stats || defaultStats() };
}

export default async (req: Request, context: Context) => {
  if (req.method === "GET") {
    const { stats } = await readStats();
    return json(stats);
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const body = (await req.json().catch(() => ({}))) as { event?: string; irId?: string };
  const { store, stats } = await readStats();

  if (body.event === "visit") {
    stats.visits += 1;
  } else if (body.event === "download") {
    stats.downloads += 1;
    if (body.irId) {
      stats.irDownloads[body.irId] = (stats.irDownloads[body.irId] || 0) + 1;
    }
  } else {
    return json({ error: "Invalid event" }, 400);
  }

  stats.updatedAt = new Date().toISOString();
  context.waitUntil(store.setJSON("totals", stats));
  return json(stats);
};

export const config: Config = {
  path: "/api/stats",
  method: ["GET", "POST"],
};
