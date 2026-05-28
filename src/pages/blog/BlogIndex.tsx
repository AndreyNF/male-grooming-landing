import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { BLOG_POSTS } from '@/data/blogPosts';
import { TELEGRAM_URL } from '@/data/site';
import { Button } from '@/components/ui/button';

const BlogIndex = () => (
  <PageLayout
    title="Статьи о мужской депиляции и автозагаре | Натали Екб"
    description="Статьи: цены на депиляцию воском в Екатеринбурге, подготовка к визиту, зоны и автозагар. @sugar_TS"
    canonical="https://sugarts.ru/blog/"
  >
    <section className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold leading-tight text-gold mb-4">
          Статьи и гайды
        </h1>
        <p className="text-white/60 text-sm sm:text-base mb-8">
          Мужская депиляция воском и автозагар в Екатеринбурге — с ценами и адресом.
        </p>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-gold text-black hover:bg-gold/85 font-semibold px-8 py-3">
            <Icon name="Send" className="w-5 h-5 mr-2" />
            Записаться @sugar_TS
          </Button>
        </a>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-4">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}/`} className="block group">
            <Card className="border-l-4 border-l-gold shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-5 sm:p-6 flex justify-between gap-4">
                <div>
                  <h2 className="font-heading font-semibold text-black text-lg group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-steel text-sm mt-2">{post.excerpt}</p>
                </div>
                <Icon name="ChevronRight" className="text-gold shrink-0" size={20} />
              </CardContent>
            </Card>
          </Link>
        ))}
        <p className="text-center pt-6">
          <Link to="/depilyaciya/" className="text-gold font-semibold text-sm hover:opacity-80">
            Услуги и прайс →
          </Link>
        </p>
      </div>
    </section>
  </PageLayout>
);

export default BlogIndex;
