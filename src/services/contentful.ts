import { createClient, Asset, Entry, EntrySkeletonType } from "contentful";
import { Document } from "@contentful/rich-text-types";

// ✅ 1) Fields (lo que usted tenía como BlogPost)
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

// ✅ 2) Skeleton requerido por Contentful v10+
export type BlogPostSkeleton = EntrySkeletonType & {
  contentTypeId: "blog1";     // <- su Content Type ID real
  fields: BlogPostFields;
};

// ✅ 3) Entry tipada correctamente
export type BlogPostEntry = Entry<BlogPostSkeleton>;

// (Opcional) Para no romper imports antiguos que usen BlogPost:
export type BlogPost = BlogPostFields;

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master",
});

// Obtener todos los posts del blog
export const getBlogPosts = async (limit = 10): Promise<BlogPostEntry[]> => {
  try {
    const response = await client.getEntries<BlogPostSkeleton>({
      content_type: "blog1",
      order: ["-fields.publishDate"],
      limit,
    });

    console.log("✅ Blog posts fetched:", response.items);
    return response.items;
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
    return [];
  }
};

// Obtener un post específico por slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPostEntry | null> => {
  try {
    const response = await client.getEntries<BlogPostSkeleton>({
      content_type: "blog1",
      "fields.slug": slug,
      limit: 1,
    });

    return response.items[0] ?? null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

// Obtener posts recientes para widget
export const getRecentPosts = async (limit = 3): Promise<BlogPostEntry[]> => {
  return getBlogPosts(limit);
};

export { client };
