import React, { FC, ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Footer from './Footer'
import Header from './Header'
import PostTitle from './PostTitle'
import CategoryTag from './CategoryTag'
import { PostMetaData } from '../types'

type PostLayoutProps = {
    meta: PostMetaData
    content: ReactNode
}

const PostLayout: FC<PostLayoutProps> = ({ meta, content }) => {
    return (
        <>
            <NextSeo title={meta.title} description={meta.excerpt} />
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Header />
                <main className="container mx-auto py-6">
                    <div className="max-w-screen-sm mx-auto">
                        <div className="flex justify-center mt-3 mb-9">
                            <CategoryTag categoryName={meta.category} />
                        </div>
                        <div className="prose dark:prose-dark">
                            <PostTitle meta={meta} />
                            <p>{meta.excerpt}</p>
                            {meta.picture && <img src={meta.picture} alt="" />}
                            {content}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default PostLayout
