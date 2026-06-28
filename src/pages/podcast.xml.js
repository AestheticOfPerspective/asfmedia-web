export async function GET(context) {
  const site = context.site?.toString().replace(/\/$/, '') || 'https://web.asfmedia.org';

  const episodes = [
    {
      title: 'Jutsu Variety Talk — Episode 1: Der Launch',
      description: 'Erste Episode vom Jutsu Variety Talk. Was ist das neue Format? Welche Games kommen dran? Und warum Podcast statt extra Arbeit?',
      pubDate: new Date('2026-06-24'),
      duration: '00:00',
      fileSize: 0,
      fileUrl: '',
    },
  ];

  const items = episodes.map((ep) => `
    <item>
      <title>${ep.title}</title>
      <description>${ep.description}</description>
      <pubDate>${ep.pubDate.toUTCString()}</pubDate>
      <guid>${site}/podcast/episode-${ep.pubDate.toISOString().split('T')[0]}</guid>
      <enclosure url="${ep.fileUrl || `${site}/podcast/placeholder.mp3`}" length="${ep.fileSize || 0}" type="audio/mpeg" />
      <itunes:duration>${ep.duration}</itunes:duration>
    </item>
  `).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Jutsu Variety Talk</title>
    <description>Der Podcast zum JutsuGaming Variety Stream. Gaming-Talk, Lore-Deep-Dives und Digital Dharma — Audio-Export der Stream-Energy.</description>
    <link>${site}</link>
    <language>de-de</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <itunes:author>JutsuGaming</itunes:author>
    <itunes:category text="Video Games" />
    <itunes:explicit>no</itunes:explicit>
    <itunes:image href="${site}/podcast-cover.jpg" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
