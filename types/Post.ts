type Post = {
    content: string
    data: { [p: string]: any } // eslint-disable-line
    filePath: string
    publishedAt: string
}

export default Post
