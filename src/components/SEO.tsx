import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const DEFAULT_IMAGE = 'https://cdn.poehali.dev/projects/f9471a49-697e-4896-8b0f-bb9d1e5e5bef/bucket/53e3b7bf-b695-4792-a3f4-ce38cf94a6bd.png';

export default function SEO({ title, description, canonical, ogImage = DEFAULT_IMAGE }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
