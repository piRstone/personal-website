import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export type PostMetaData = {
    title: string;
    description: string;
}

type PostLayoutProps = {
    meta: PostMetaData;
    content: ReactNode;
    mdxText: string;
}

const PostLayout: FC<PostLayoutProps> = ({ meta, content, mdxText }) => {
    return (
        <div className="bg-white dark:bg-gray-900 h-screen text-black dark:text-gray-300">
            <Header />
            <main className="container mx-auto py-6">
                <div className="max-w-screen-sm mx-auto">
                    {content}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PostLayout;
