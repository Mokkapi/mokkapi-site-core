
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  excerpt: string;
  content: string;
}

// Get all blog posts with frontmatter and content
export async function getAllPosts(): Promise<BlogPost[]> {
  // In a browser environment, we need to fetch the files
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];
  
  for (const path in modules) {
    const moduleLoader = modules[path];
    const content = await moduleLoader();
    
    // Parse frontmatter and markdown content
    const { data, content: markdownContent } = matter(content);
    
    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);
    
    // Extract slug from filename
    const slug = path.replace('/src/content/blog/', '').replace('.md', '');
    
    posts.push({
      slug,
      title: data.title || 'Untitled',
      category: data.category || 'Uncategorized',
      date: data.date ? new Date(data.date).toLocaleDateString() : 'Unknown date',
      author: data.author || 'Anonymous',
      authorImage: data.authorImage || '/placeholder.svg',
      excerpt: data.excerpt || '',
      content: htmlContent
    });
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get a specific post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}
