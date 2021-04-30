import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import Head from 'next/head'
import { FC } from 'react'
import PostCard from '../components/PostCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import formatDate from '../utils/formatDate'
import { Post } from '../types'
import styles from '../styles/Home.module.css'

type HomeProps = {
    posts: Post[]
}

const Home: FC<HomeProps> = ({ posts }) => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-gray-300 min-h-screen">
            <Head>
                <title>Pierre Lavalley</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto py-6">
                <div className="max-w-screen-md mx-auto">
                    <h2 className={`${styles.h2} font-bold text-4xl mb-10`}>Dernier articles</h2>
                    <div className="flex flex-col">
                        {posts.map((post) => (
                            <PostCard
                                key={post.data.title}
                                title={post.data.title}
                                publishedAt={post.publishedAt}
                                filePath={post.filePath}
                                excerpt={post.data.excerpt}
                                category={post.data.category}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home

export const getStaticProps = () => {
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

    return {
        props: {
            posts,
        },
    }
}
