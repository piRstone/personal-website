import React, { FC } from 'react'
import { PostMetaData } from '../types'
import styles from '../styles/PostTitle.module.css'

type PostTitleProps = {
    meta: PostMetaData
}

const PostTitle: FC<PostTitleProps> = ({ meta }) => {
    return (
        <div>
            <h1 className={`${styles.heading} font-2xl mb-1 text-center`}>{meta.title}</h1>
            <p className={`${styles.postMeta} post-meta font-sm text-gray-500 text-center`}>
                {meta.publishedAt}
            </p>
        </div>
    )
}

export default PostTitle
