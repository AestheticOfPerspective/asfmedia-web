<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ASFMedia RSS Feed</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #080c14; color: #e2eaf5; max-width: 700px; margin: 2rem auto; padding: 0 1rem; }
    h1 { font-size: 1.8rem; color: #1ee8d0; }
    a { color: #1ee8d0; text-decoration: none; }
    a:hover { color: #f59e0b; }
    ul { list-style: none; padding: 0; }
    li { margin: 1rem 0; padding: 1rem; background: #0d1425; border: 1px solid rgba(30,232,208,0.15); border-radius: 12px; }
    .date { font-size: 0.82rem; color: #5a6a7e; }
    .desc { color: #94a3b8; font-size: 0.92rem; }
  </style>
</head>
<body>
  <h1><a href="{rss/channel/link}"><xsl:value-of select="rss/channel/title"/></a></h1>
  <p><xsl:value-of select="rss/channel/description"/></p>
  <ul>
    <xsl:for-each select="rss/channel/item">
      <li>
        <h3><a href="{link}"><xsl:value-of select="title"/></a></h3>
        <div class="date"><xsl:value-of select="pubDate"/></div>
        <div class="desc"><xsl:value-of select="description"/></div>
      </li>
    </xsl:for-each>
  </ul>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
