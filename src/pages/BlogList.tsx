import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBlogPosts } from '../services/contentful';
import { Entry } from 'contentful';
import { BlogPost } from '../services/contentful';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import AOS from 'aos';

const BlogList = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<Entry<BlogPost>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      delay: 0
    });
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const blogPosts = await getBlogPosts(20); // Traer hasta 20 posts
      setPosts(blogPosts);
      setLoading(false);
    };

    fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const locale = i18n.language === 'es' ? es : enUS;
    return format(date, 'dd MMMM yyyy', { locale });
  };

  return (
    <div className="site-wrap">
      {/* Banner Hero */}
      <div 
        className="site-section-cover overlay inner-page bg-light" 
        style={{ 
          backgroundImage: "url('/images/blog-header.jpg')",
          minHeight: '400px'
        }}
        data-aos="fade"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center" style={{ minHeight: '400px' }}>
            <div className="col-lg-10">
              <div className="py-5">
                <div className="block-heading-1">
                  <span 
                    className="d-block mb-2 text-white" 
                    data-aos="fade-up"
                    style={{ 
                      fontSize: '1rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {t('blog.subtitle')}
                  </span>
                  <h1 
                    className="mb-0 text-white" 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                    style={{ 
                      fontSize: '3rem',
                      fontWeight: '700',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {t('blog.title')}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="site-section bg-light py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-5">
              <h3>{t('blog.noPosts')}</h3>
              <p>{t('blog.noPostsMessage')}</p>
            </div>
          ) : (
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
                    data-aos-delay={index * 50}
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
                          {publishDate && (
                            <span className="blog-meta-item">
                              <Calendar size={14} />
                              {formatDate(publishDate)}
                            </span>
                          )}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;