import path from 'path';
import fs from 'fs';
import { FC } from 'react';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import mdx from '@mdx-js/mdx';
import PostLayout, { PostMetaData } from '../../components/PostLayout';

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

type PostPageProps = {
    meta: PostMetaData;
    source: any;
    mdxText: string;
};

const PostPage: FC<PostPageProps> = ({ meta, source, mdxText }) => {
    const content = hydrate(source);
    return <PostLayout meta={meta} content={content} mdxText={mdxText} />
};

export default PostPage;

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data: meta } = matter(source);

    const mdxSource = await renderToString(content);
    const mdxText = await mdx(content);

    return {
        props: {
            mdxText,
            source: mdxSource,
            meta,
        },
    };
};

export const getStaticPaths = () => {
    const paths = postFilePaths
        .map((path) => path.replace(/\.mdx?$/, ''))
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};
