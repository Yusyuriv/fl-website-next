export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/-{2,}/, '-');
}

declare function refreshFsLightbox(): void;

export function addLightboxToBlogPostImages(): void {
  const blogs = document.querySelectorAll('.blog-content') as NodeListOf<HTMLElement>;

  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const images = blog.querySelectorAll('img');
    for (const image of images) {
      const a = document.createElement('a');
      a.href = image.src;
      a.dataset.fslightbox = `blog-${i}`;
      image.replaceWith(a);
      a.appendChild(image);
    }
  }

  refreshFsLightbox();
}
