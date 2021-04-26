import path from 'path';
import fs from 'fs';
import React, { FC } from 'react';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import formatDate from '../../utils/formatDate';

export type Post = {
    content: string;
    data: { [p: string]: any };
    filePath: string;
    publishedAt: string
}

type BlogRootPageProps = {
    posts: Post[];
};

const BlogRootPage: FC<BlogRootPageProps> = ({ posts }) => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-gray-300">
            <Header />
            <main className="container mx-auto py-6">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="font-bold text-4xl mb-10">Blog</h1>

                    <div className="flex flex-col">
                        {posts.map((post) => (
                            <PostCard
                                key={post.data.title}
                                title={post.data.title}
                                publishedAt={post.publishedAt}
                                filePath={post.filePath}
                                excerpt={post.data.excerpt}
                            />
                        ))}
                    </div>
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
        const publishedAt = formatDate(data.publishedAt);

        return {
            content,
            data,
            filePath,
            publishedAt
        };
    });

    return {
        props: {
            posts,
        },
    };
};
