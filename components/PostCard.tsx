import Link from 'next/link'
import React, { FC } from 'react'
import CategoryTag from './CategoryTag'

type PostCardProps = {
    title: string
    filePath: string
    publishedAt: string
    excerpt: string
    category?: string
}

const PostCard: FC<PostCardProps> = ({ title, filePath, publishedAt, excerpt, category }) => {
    return (
        <Link href={`/blog/${filePath.replace(/\.mdx?$/, '')}`}>
            <a className="cursor-pointer">
                <div className="mb-9 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl relative">
                    <CategoryTag className="absolute -top-3 right-5" categoryName={category} />
                    <article>
                        <h3 className="font-bold text-xl mb-2">{title}</h3>
                        <p className="text-sm text-gray-500">{publishedAt}</p>
                        <p className="mt-2">{excerpt}</p>
                    </article>
                </div>
            </a>
        </Link>
    )
}

export default PostCard
