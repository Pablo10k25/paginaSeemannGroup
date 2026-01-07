import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBlogPosts } from '../services/contentful';
import type { BlogPostEntry } from '../services/contentful';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

const BlogSection = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPostEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const blogPosts = await getBlogPosts(3); // Últimos 3 posts
      setPosts(blogPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = i18n.language === 'es' ? es : enUS;
    return format(date, 'dd MMMM yyyy', { locale });
  };

  if (loading) {
    return (
      <div className="blog-section py-5" id="blog-section">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return null; // No mostrar la sección si no hay posts
  }

  return (
    <div className="blog-section py-5" id="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="block-heading-1" data-aos="fade-up">
              <span>{t('blog.subtitle')}</span>
              <h2>{t('blog.title')}</h2>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {posts.map((post, index) => {
            const { title, slug, author, publishDate, featuredImage, excerpt, category } = post.fields;
            const imageUrl = featuredImage?.fields?.file?.url 
              ? `https:${featuredImage.fields.file.url}` 
              : '/images/default-blog.jpg';

            return (
              <div 
                key={post.sys.id} 
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <article className="blog-card">
                  <Link to={`/blog/${slug}`} className="blog-card-image-link">
                    <div 
                      className="blog-card-image"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                      {category && (
                        <span className="blog-card-category">{category}</span>
                      )}
                    </div>
                  </Link>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-meta-item">
                        <Calendar size={14} />
                        {formatDate(publishDate)}
                      </span>
                      {author && (
                        <span className="blog-meta-item">
                          <User size={14} />
                          {author}
                        </span>
                      )}
                    </div>

                    <h3 className="blog-card-title">
                      <Link to={`/blog/${slug}`}>{title}</Link>
                    </h3>

                    {excerpt && (
                      <p className="blog-card-excerpt">{excerpt}</p>
                    )}

                    <Link to={`/blog/${slug}`} className="blog-card-link">
                      {t('blog.readMore')}
                      <ArrowRight size={16} className="ms-2" />
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {posts.length >= 3 && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link to="/blog" className="btn btn-outline-danger btn-lg">
                {t('blog.viewAll')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;