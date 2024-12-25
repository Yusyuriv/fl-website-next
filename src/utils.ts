import process from 'node:process';

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
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

export function getBaseUrl(emptyRoot = false): string {
  const path = "/" + (process.env.WEBSITE_BASE?.split('/')?.slice(1)?.join('/') ?? "");
  return emptyRoot && path === "/" ? "" : path;
}

const cache = new Map();

export function setCache(key: string, value: any): void {
  cache.set(key, value);
}

export function getCache(key: string): any {
  return cache.get(key);
}

const SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export function formatBytes(bytes: number): string {
  let unitIndex = 0;
  while (bytes >= 1024) {
    bytes /= 1024;
    unitIndex++;
  }
  return `${bytes.toFixed(2)} ${SIZE_UNITS[unitIndex]}`;
}
