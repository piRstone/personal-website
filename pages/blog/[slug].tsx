import path from 'path'
import fs from 'fs'
import { FC } from 'react'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import PostLayout, { PostMetaData } from '../../components/PostLayout'

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import formatDate from '../../utils/formatDate'

type PostPageProps = {
    meta: PostMetaData
    source: any
}

const PostPage: FC<PostPageProps> = ({ meta, source }) => {
    const content = hydrate(source)
    return <PostLayout meta={meta} content={content} />
}

export default PostPage

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data: meta } = matter(source)

    const mdxSource = await renderToString(content)

    meta.publishedAt = formatDate(meta.publishedAt)

    return {
        props: {
            source: mdxSource,
            meta,
        },
    }
}

export const getStaticPaths = () => {
    const paths = postFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
