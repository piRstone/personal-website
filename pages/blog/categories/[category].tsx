import path from 'path'
import fs from 'fs'
import React, { FC } from 'react'
import { categories, Post } from '../../../types'
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'
import matter from 'gray-matter'
import formatDate from '../../../utils/formatDate'
import PostCard from '../../../components/PostCard'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

type CategoryPageProps = {
    posts: Post[]
    category: string
}

const CategoryPage: FC<CategoryPageProps> = ({ posts, category }) => {
    const cat = categories[category]
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-gray-300 min-h-screen">
            <Header />
            <main className="container mx-auto py-6">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="font-bold text-4xl mb-10">
                        <span
                            className={`text-transparent bg-clip-text bg-gradient-to-r from-${cat.colorFrom} to-${cat.colorTo}`}
                        >
                            {cat.name}
                        </span>
                    </h1>

                    {posts.length ? (
                        posts.map((post) => (
                            <PostCard
                                key={post.data.title}
                                title={post.data.title}
                                publishedAt={post.publishedAt}
                                filePath={post.filePath}
                                excerpt={post.data.excerpt}
                                category={post.data.category}
                            />
                        ))
                    ) : (
                        <p>Pas d'articles pour cette catégories</p> // eslint-disable-line
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default CategoryPage

export const getStaticProps = ({ params }) => {
    const posts: Post[] = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const { content, data } = matter(source)
        const publishedAt = formatDate(data.publishedAt)

        return {
            content,
            data,
            filePath,
            publishedAt,
        }
    })

    const categoryPosts = posts.filter((post) => post.data.category === params.category)

    return {
        props: {
            posts: categoryPosts,
            category: params.category,
        },
    }
}

export const getStaticPaths = () => {
    const paths = Object.keys(categories).map((cat) => `/blog/categories/${cat}`)

    return {
        paths,
        fallback: false,
    }
}
