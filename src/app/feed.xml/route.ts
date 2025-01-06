import { episodes, podcastInfo } from "../../data/episodes";
import { NextResponse } from "next/server";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <title>${escapeXml(podcastInfo.title)}</title>
    <link>${escapeXml(podcastInfo.websiteUrl)}</link>
    <language>${podcastInfo.language}</language>
    <copyright>${escapeXml(podcastInfo.copyright)}</copyright>
    <itunes:author>${escapeXml(podcastInfo.author)}</itunes:author>
    <itunes:owner>
      <itunes:name>${escapeXml(podcastInfo.author)}</itunes:name>
      <itunes:email>${escapeXml(podcastInfo.email)}</itunes:email>
    </itunes:owner>
    <itunes:explicit>${
      podcastInfo.explicit ? "true" : "false"
    }</itunes:explicit>
    <itunes:category text="${escapeXml(podcastInfo.category)}"/>
    <itunes:image href="${baseUrl}${podcastInfo.image}"/>
    <description>${escapeXml(podcastInfo.description)}</description>
    <itunes:subtitle>${escapeXml(
      podcastInfo.subtitle || podcastInfo.description
    )}</itunes:subtitle>
    <itunes:summary>${escapeXml(podcastInfo.description)}</itunes:summary>
    <itunes:type>episodic</itunes:type>
    ${episodes
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(
        (episode) => `
    <item>
      <title>${escapeXml(episode.title)}</title>
      <description>${escapeXml(episode.description)}</description>
      <pubDate>${new Date(episode.date).toUTCString()}</pubDate>
      <enclosure url="${baseUrl}${episode.file}" type="audio/mpeg" length="0"/>
      <guid isPermaLink="false">${baseUrl}${episode.file}</guid>
      <itunes:duration>${episode.duration}</itunes:duration>
      <itunes:explicit>${episode.explicit ? "true" : "false"}</itunes:explicit>
      ${
        episode.image ? `<itunes:image href="${baseUrl}${episode.image}"/>` : ""
      }
      <itunes:title>${escapeXml(episode.title)}</itunes:title>
      <itunes:subtitle>${escapeXml(
        episode.subtitle || episode.description
      )}</itunes:subtitle>
      <itunes:summary>${escapeXml(episode.description)}</itunes:summary>
      <itunes:episode>${episode.episodeNumber || ""}</itunes:episode>
      <itunes:season>${episode.seasonNumber || ""}</itunes:season>
      <content:encoded><![CDATA[${episode.description}]]></content:encoded>
    </item>`
      )
      .join("\n    ")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
