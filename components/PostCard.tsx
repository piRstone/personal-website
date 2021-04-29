import Link from 'next/link'
import React, { FC } from 'react'
import styles from '../styles/PostCard.module.css'

type PostCardProps = {
    title: string
    filePath: string
    publishedAt: string
    excerpt: string
}

const PostCard: FC<PostCardProps> = ({ title, filePath, publishedAt, excerpt }) => {
    return (
        <div className="mb-5 p-6 bg-gray-100 dark:bg-gray-800 rounded-md">
            <article>
                <Link href={`/blog/${filePath.replace(/\.mdx?$/, '')}`}>
                    <a>
                        <h3 className={`${styles.title} font-bold text-xl mb-2`}>{title}</h3>
                        <p className="text-sm text-gray-500">{publishedAt}</p>
                        <p className="mt-2">{excerpt}</p>
                    </a>
                </Link>
            </article>
        </div>
    )
}

export default PostCard
