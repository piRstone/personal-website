import React, { FC, ReactNode } from 'react';

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
        <div>
            <main>{content}</main>
        </div>
    );
};

export default PostLayout;
