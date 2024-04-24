import path from 'path'
import fs from 'fs'
import { FC } from 'react'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import mdxPrism from 'mdx-prism'
import PostLayout from '../../components/PostLayout'
import { PostMetaData } from '../../types'

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'
import formatDate from '../../utils/formatDate'

type PostPageProps = {
    meta: PostMetaData
    source: any         // eslint-disable-line
}

const PostPage: FC<PostPageProps> = ({ meta, source }) => {
    // const content = hydrate(source)
    return (
        <PostLayout meta={meta}>
            <MDXRemote {...source} />
        </PostLayout>
    )
}

export default PostPage

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data: meta } = matter(source)

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [mdxPrism],
        },
    })

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
