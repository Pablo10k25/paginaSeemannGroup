import { createClient, Entry, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Interface para los campos del blog post
export interface BlogPostFields {
  title: string;
  slug: string;
  author?: string;
  publishDate: string;
  featuredImage?: Asset;
  excerpt?: string;
  content: Document;
  category?: string;
}

// Tipo Entry con campos tipados
export type BlogPostEntry = Entry<{
  fields: BlogPostFields;
  contentTypeId: 'blog1';
}>;

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
  environment: (import.meta.env.VITE_CONTENTFUL_ENVIRONMENT as string) || 'master',
});

// Obtener todos los posts del blog
export const getBlogPosts = async (limit = 10): Promise<any[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blog1',
      order: ['-fields.publishDate'],
      limit,
    });
    
    console.log('✅ Blog posts fetched:', response.items);
    return response.items;
  } catch (error) {
    console.error('❌ Error fetching blog posts:', error);
    return [];
  }
};

// Obtener un post específico por slug
export const getBlogPostBySlug = async (slug: string): Promise<any | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'blog1',
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Obtener posts recientes para widget
export const getRecentPosts = async (limit = 3): Promise<any[]> => {
  return getBlogPosts(limit);
};

export { client };