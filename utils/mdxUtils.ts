import fs from 'fs';
import path from 'path';

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const postsFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));
