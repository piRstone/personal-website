import React, { FC } from 'react';
import { PostMetaData } from './PostLayout';

type PostTitleProps = {
    meta: PostMetaData
}

const PostTitle: FC<PostTitleProps> = ({ meta }) => {
    return (
        <div>
            <h1 className="font-2xl mb-1" >{meta.title}</h1>
            <p className="font-sm text-gray-500">{meta.publishedAt}</p>
        </div>
    );
};

export default PostTitle;
