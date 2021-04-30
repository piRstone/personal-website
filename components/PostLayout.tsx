import React, { FC, ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Footer from './Footer'
import Header from './Header'
import PostTitle from './PostTitle'
import CategoryTag from './CategoryTag'
import { categories, PostMetaData } from '../types'
import { useRouter } from 'next/router'

type PostLayoutProps = {
    meta: PostMetaData
    content: ReactNode
}

const PostLayout: FC<PostLayoutProps> = ({ meta, content }) => {
    const { asPath } = useRouter()
    const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`

    return (
        <>
            <NextSeo
                title={meta.title}
                description={meta.excerpt}
                canonical={canonicalUrl}
                openGraph={{
                    article: {
                        publishedTime: meta.publishedAt,
                        tags: [categories[meta.category]?.name],
                    },
                }}
            />
            <div className="bg-white dark:bg-gray-900 min-h-screen">
                <Header />
                <main className="container mx-auto py-6 px-4 md:px-0">
                    <div className="max-w-screen-md mx-auto">
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
