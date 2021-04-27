import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import PostTitle from './PostTitle';

export type PostMetaData = {
    title: string;
    excerpt: string;
    publishedAt: string;
}

type PostLayoutProps = {
    meta: PostMetaData;
    content: ReactNode;
    mdxText: string;
}

const PostLayout: FC<PostLayoutProps> = ({ meta, content, mdxText }) => {
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <Header />
            <main className="container mx-auto py-6">
                <div className="prose dark:prose-dark max-w-screen-sm mx-auto">
                    <PostTitle meta={meta} />
                    {content}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PostLayout;
