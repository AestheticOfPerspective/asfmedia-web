import rss from '@astrojs/rss';

const postModules = import.meta.glob('../data/blog/*.md', { eager: true });

export async function GET(context) {
  const posts = Object.entries(postModules)
    .map(([path, mod]) => ({ path, ...mod }))
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return rss({
    title: 'ASFMedia | JutsuGaming Blog',
    description: 'Gaming, Streaming, Tech und Digital Dharma — aus dem Edgerunner-Alltag.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.date),
      description: post.frontmatter.description,
      link: `/blog/${post.path.split('/').pop()?.replace('.md', '')}`,
      customData: post.frontmatter.tags
        ? `<category>${post.frontmatter.tags.join(', ')}</category>`
        : '',
    })),
    customData: `<language>de-de</language>`,
    stylesheet: '/rss-style.xsl',
  });
}
