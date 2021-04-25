import path from 'path';
import fs from 'fs';
import React, { FC } from 'react';
import matter from 'gray-matter';
import Link from 'next/link';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export type Post = {
    content: string;
    data: { [p: string]: any };
    filePath: string;
}

type BlogRootPageProps = {
    posts: Post[];
};

const BlogRootPage: FC<BlogRootPageProps> = ({ posts }) => {
    return (
        <div className="bg-white dark:bg-gray-900 h-screen text-black dark:text-gray-300">
            <Header />
            <main className="container mx-auto py-6">
                <div className="max-w-screen-md mx-auto">
                    <h1>Bonjour, ceci est mon blog</h1>

                    <ul>
                        {posts.map((post) => (
                            <li key={post.data.title}>
                                <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}>
                                    <a>{post.data.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogRootPage;

export const getStaticProps = () => {
    const posts: Post[] = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath
        };
    });

    return {
        props: {
            posts,
        },
    };
};
