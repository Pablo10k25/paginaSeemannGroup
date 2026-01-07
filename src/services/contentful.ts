import { createClient, Entry, Asset, EntryFieldTypes } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Definir el skeleton type para Contentful v10+
export interface BlogPostFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  author?: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
  featuredImage?: EntryFieldTypes.AssetLink;
  excerpt?: EntryFieldTypes.Text;
  content: EntryFieldTypes.RichText;
  category?: EntryFieldTypes.Text;
}

// Tipo para usar en la app
export interface BlogPost {
  title: string;
  slug: string;
  author?: string;
  publishDate: string;
  featuredImage?: Asset;
  excerpt?: string;
  content: Document;
  category?: string;
}

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
  environment: (import.meta.env.VITE_CONTENTFUL_ENVIRONMENT as string) || 'master',
});

// Obtener todos los posts del blog
export const getBlogPosts = async (limit = 10): Promise<Entry<BlogPost>[]> => {
  try {
    const response = await client.getEntries<BlogPost>({
      content_type: 'blog1',
      order: ['-fields.publishDate'] as any,
      limit,
    });
    
    console.log('✅ Blog posts fetched:', response.items);
    return response.items as Entry<BlogPost>[];
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error);
    return [];
  }
};

// Obtener un post específico por slug
export const getBlogPostBySlug = async (slug: string): Promise<Entry<BlogPost> | null> => {
  try {
    const response = await client.getEntries<BlogPost>({
      content_type: 'blog1',
      'fields.slug': slug,
      limit: 1,
    });
    return (response.items[0] as Entry<BlogPost>) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Obtener posts recientes para widget
export const getRecentPosts = async (limit = 3): Promise<Entry<BlogPost>[]> => {
  return getBlogPosts(limit);
};

export { client };