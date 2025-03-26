
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

// Browser-compatible function to parse frontmatter
function parseMarkdown(content: string) {
  // Simple regex to extract frontmatter between --- markers
  const frontMatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return {
      data: {},
      content: content
    };
  }
  
  const frontMatterStr = match[1];
  const contentStr = match[2];
  
  // Parse the frontmatter string into an object
  const data: Record<string, any> = {};
  const lines = frontMatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      data[key] = value;
    }
  }
  
  return {
    data,
    content: contentStr
  };
}

// Get all blog posts with frontmatter and content
export async function getAllPosts(): Promise<BlogPost[]> {
  // In a browser environment, we need to fetch the files
  const modules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];
  
  for (const path in modules) {
    try {
      const moduleLoader = modules[path];
      const content = await moduleLoader();
      
      // Parse frontmatter and markdown content
      const { data, content: markdownContent } = parseMarkdown(content);
      
      // Convert markdown to HTML
      const htmlContent = marked.parse(markdownContent) as string;
      
      // Extract slug from filename
      const slug = path.replace('/src/content/blog/', '').replace('.md', '');
      
      const blogData = {
        slug: slug,
        title: data.title || 'Untitled',
        category: data.category || 'Uncategorized',
        date: data.date ? new Date(data.date).toLocaleDateString() : 'Unknown date',
        author: data.author || 'Anonymous',
        authorImage: data.authorImage || '/placeholder.svg',
        excerpt: data.excerpt || '',
        content: htmlContent
      };
      posts.push(blogData);
    } catch (error) {
      console.error(`Error processing markdown file at ${path}:`, error);
    }
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
