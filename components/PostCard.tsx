import Link from 'next/link';
import React, { FC } from 'react';

type PostCardProps = {
    title: string;
    filePath: string;
    publishedAt: string;
    excerpt: string;
}

const PostCard: FC<PostCardProps> = ({ title, filePath, publishedAt, excerpt }) => {
    return (
        <div className="mb-5 p-4 bg-gray-200 dark:bg-gray-800 rounded-md">
            <article>
                <Link href={`/blog/${filePath.replace(/\.mdx?$/, '')}`}>
                    <a>
                        <h3 className="font-bold text-xl mb-2">{title}</h3>
                        <p className="text-sm text-gray-500">{publishedAt}</p>
                        <p className="mt-2">{excerpt}</p>
                    </a>
                </Link>
            </article>
        </div>
    );
};

export default PostCard;
