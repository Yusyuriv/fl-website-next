import {getCollection, getEntry} from "astro:content";
import path from "node:path";

export async function getPluginBlogPosts(pluginPath?: string, bySlug = false) {
  if (!pluginPath) return [];

  let directoryPath: string;
  if (!bySlug) {
    directoryPath = path.join(pluginPath, "..", "blog");
  } else {
    const plugin = await getEntry("plugins", pluginPath);
    if (!plugin) return [];
    
    directoryPath = path.join(plugin!.filePath!, "..", "blog");
  }
  return getCollection("pluginBlog", v => path.join(v.filePath!).startsWith(directoryPath));
}
